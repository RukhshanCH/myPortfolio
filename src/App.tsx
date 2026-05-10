import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Hero from './pages/Hero'
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Services from './pages/Services';
import Footer from './Footer';
import FloatingContactButton from './components/ContactButton';
import BackToTopButton from './components/BackToTopButton';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <div className="separator">
        <span></span>
      </div>
      <About />
      <div className="separator">
        <span></span>
      </div>
      <Skills />
      <div className="separator">
        <span></span>
      </div>
      <Projects />
      <div className="separator">
        <span></span>
      </div>
      <Experience />
      <div className="separator">
        <span></span>
      </div>
      <Services />
      
      <Footer />

      <FloatingContactButton />
      <BackToTopButton />
    </>
  )
}

export default App
