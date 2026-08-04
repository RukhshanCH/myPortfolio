import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Hero from './pages/Hero'
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Footer from './Footer';
import FloatingContactButton from './components/ContactButton';
import BackToTopButton from './components/BackToTopButton';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import Loader from './components/Loader';
import Separator from './components/Separator';
import useLenis from './components/useLenis';
import Experience from './pages/Experience';
import Cursor from './components/Cursor';

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
      )}
    </>
  )
}

export default App
