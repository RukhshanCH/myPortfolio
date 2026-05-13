import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Hero from './pages/Hero'
import Skills from './pages/Skills';
import Projects from './pages/Projects';
// import Experience from './pages/Experience';
import Services from './pages/Services';
import Footer from './Footer';
import FloatingContactButton from './components/ContactButton';
import BackToTopButton from './components/BackToTopButton';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Separator from './components/Separator';

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [])

  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <>
          <Navbar />

          <Hero />
          <Separator />

          <About />
          <Separator />

          <Skills />
          <Separator />

          <Projects />
          <Separator />

          {/* <Experience />
          <Separator />
           */}
          
          <Services />

          <Footer />

          <FloatingContactButton />
          <BackToTopButton />
        </>
      )}
    </>
  )
}

export default App
