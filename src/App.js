import { Navbar } from "./Components/Navbar/Navbar";
import './App.css';
import Intro from "./Components/Intro/Intro";
import Service from "./Components/Service/Service";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { themeContext } from "./Context";
import { motion, useScroll } from "framer-motion";
import { animateScroll } from "react-scroll";

function App() {
  const theme = useContext(themeContext);
  const colorMode = theme.state.darkMode;
  const { scrollYProgress } = useScroll();

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { // Adjust the scroll position at which the button appears
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App"
      style={{
        background: colorMode ? '#1c1c1c' : 'white',
        color: colorMode ? 'white' : 'black'
      }}
    >
        <i class="fa-sharp fa-regular fa-jet-fighter-up fa-fade"></i>

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      {
        showButton &&
        <button
          className="go-to-top"
          onClick={() => animateScroll.scrollTo(0)}>
          ⬆️
          </button>
      }

      <Navbar />
      <Intro />
      <Service />
      <Experience />
      <Works />
      <Portfolio />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
