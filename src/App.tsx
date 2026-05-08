import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Navbar from './components/Navbar'
import About from './pages/About'
import Hero from './pages/Hero'
import usePortfolioInteractions from './components/usePortfolioInteractions';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Services from './pages/Services';
import Footer from './Footer';

function App() {
  const { scrollBtnRef } = usePortfolioInteractions();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Footer />

      <button className="scroll-top" ref={scrollBtnRef} id="scrollTop">
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </>
  )
}

export default App
