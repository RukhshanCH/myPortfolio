import './App.css'
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import Loader from './components/Loader';
import useLenis from './components/useLenis';
// import Cursor from './components/Cursor';

// Import functions are kept as named references (rather than inlined into
// `lazy()`) so they can also be invoked directly for preloading below.
// The dynamic-import cache means calling one of these twice only triggers
// one network request — `lazy()` gets the same cached module.
const importNavbar = () => import('./components/Navbar');
const importHero = () => import('./pages/Hero');
const importSeparator = () => import('./components/Separator');
const importAbout = () => import('./pages/About');
const importSkills = () => import('./pages/Skills');
const importProjects = () => import('./pages/Projects');
const importExperience = () => import('./pages/Experience');
const importServices = () => import('./pages/Services');
const importFooter = () => import('./Footer');
const importContactButton = () => import('./components/ContactButton');
const importBackToTopButton = () => import('./components/BackToTopButton');

const Navbar = lazy(importNavbar);
const Hero = lazy(importHero);
const Separator = lazy(importSeparator);
const About = lazy(importAbout);
const Skills = lazy(importSkills);
const Projects = lazy(importProjects);
const Experience = lazy(importExperience);
const Services = lazy(importServices);
const Footer = lazy(importFooter);
const FloatingContactButton = lazy(importContactButton);
const BackToTopButton = lazy(importBackToTopButton);

type LoadPhase = 'assets' | 'logo' | 'ready';

// Minimum time to keep the initial loader up, even if the page is ready
// instantly — avoids an unpleasant flash on fast connections.
const MIN_LOADER_MS = 1200;
// Hard ceiling on how long we'll wait for fonts/window/chunks before giving
// up and moving on anyway — protects against a slow connection or a stuck
// request leaving the user stuck on the loader forever. If this fires, the
// Suspense fallback may briefly reappear for whatever chunk is still in
// flight; that's an acceptable trade-off for "never hang forever".
const MAX_WAIT_MS = 8000;
// How long the logo reveal animation plays before it's dismissed.
const LOGO_DURATION_MS = 1500;

function App() {
  useLenis()

  const [phase, setPhase] = useState<LoadPhase>('assets');

  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' &&
    'matchMedia' in window &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ).current;

  // Phase 1: "assets" -> "logo".
  // Waits on real readiness signals (fonts + window load) *and* on the
  // lazy route chunks actually finishing their download — not just a
  // timer — so that by the time content mounts behind the logo, Suspense
  // has nothing left to wait on and its fallback (Loader) never has a
  // reason to reappear once the logo fades out. A minimum display time
  // is still enforced so the loader never flashes on/off too quickly on
  // a fast connection.
  useEffect(() => {
    let cancelled = false;
    const start = performance.now();

    const fontsReady =
      typeof document !== 'undefined' && 'fonts' in document
        ? document.fonts.ready
        : Promise.resolve();

    const windowLoaded =
      typeof document !== 'undefined' && document.readyState === 'complete'
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
          window.addEventListener('load', () => resolve(), { once: true });
        });

    const chunksLoaded = Promise.all([
      importNavbar(),
      importHero(),
      importSeparator(),
      importAbout(),
      importSkills(),
      importProjects(),
      importExperience(),
      importServices(),
      importFooter(),
      importContactButton(),
      importBackToTopButton(),
    ]);

    const readiness = Promise.all([fontsReady, windowLoaded, chunksLoaded]);
    const maxWait = new Promise<void>((resolve) => {
      setTimeout(resolve, MAX_WAIT_MS);
    });

    Promise.race([readiness, maxWait]).then(() => {
      if (cancelled) return;
      const elapsed = performance.now() - start;
      const remaining = Math.max(MIN_LOADER_MS - elapsed, 0);
      const timer = setTimeout(() => {
        if (!cancelled) setPhase('logo');
      }, remaining);
      // Note: this inner cleanup only matters if `cancelled` flips between
      // scheduling and firing, which the outer cleanup already guards via
      // the `cancelled` flag — kept for completeness.
      return () => clearTimeout(timer);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  // Phase 2: "logo" -> "ready".
  useEffect(() => {
    if (phase !== 'logo') return;

    if (prefersReducedMotion) {
      setPhase('ready');
      return;
    }

    const timer = setTimeout(() => setPhase('ready'), LOGO_DURATION_MS);
    return () => clearTimeout(timer);
  }, [phase, prefersReducedMotion]);

  const showInitialLoader = phase === 'assets';
  const showLogo = phase === 'logo';
  const showContent = phase !== 'assets';

  return (
    <>
      <AnimatePresence>
        {showLogo && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="loading-screen"
            aria-hidden="true"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="loading-content"
            >
              <motion.h1
                className="loading-logo"
                animate={prefersReducedMotion ? {} : { opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                RS.
              </motion.h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* <Cursor /> */}

      {showInitialLoader && <Loader />}

      {showContent && (
        <Suspense fallback={<Loader />}>
          <Navbar />
          <main>
            <Hero />
            <Separator />

            <About />
            <Separator />

            <Skills />
            <Separator />

            <Projects />
            <Separator />

            <Experience />
            <Separator />

            <Services />
          </main>
          <Footer />

          <FloatingContactButton />
          <BackToTopButton />
        </Suspense>
      )}
    </>
  )
}

export default App