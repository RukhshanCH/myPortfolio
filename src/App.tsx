import './App.css'
import { lazy, Suspense, useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import Loader from './components/Loader';
import useLenis from './components/useLenis';
import Cursor from './components/Cursor';

const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./pages/Hero'));
const Separator = lazy(() => import('./components/Separator'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const Experience = lazy(() => import('./pages/Experience'));
const Services = lazy(() => import('./pages/Services'));
const Footer = lazy(() => import('./Footer'));
const FloatingContactButton = lazy(() => import('./components/ContactButton'));
const BackToTopButton = lazy(() => import('./components/BackToTopButton'));

function App() {
  useLenis()

  const [loader, setLoader] = useState(true);
  const [logoLoad, setLogoLoad] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
      setLogoLoad(true);
      const timerLogo = setTimeout(() => setLogoLoad(false), 1500)
      return () => clearTimeout(timerLogo)
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {logoLoad && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="loading-screen"
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
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                RS.
              </motion.h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Cursor />
      {loader && <Loader />}
      {!loader && (
        <Suspense fallback={<Loader />}>
          <>
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
          </>
        </Suspense>
      )}
    </>
  )
}

export default App
