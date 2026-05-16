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
import Loader from './components/Loader';
import Separator from './components/Separator';
import useLenis from './components/useLenis';

function App() {
  useLenis()
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [])

  return (
    <>
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
