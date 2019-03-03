import React, { useState, useEffect } from "react";
import Intro from "./components/Intro.jsx";
import WriteUp from "./components/WriteUp.jsx";
import JuicelineExamples from './components/JuicelineExamples.jsx';
import HondaExamples from './components/HondaExamples.jsx';
import JubeckExamples from './components/JubeckExamples.jsx';
import About from './components/About.jsx'

const App = () => {

  function getSize() {
    return {
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    };
  }

  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const screenWidth = windowSize.innerWidth;
  const transition = "transform 2s";
  return (
    <div className="App">
      <Intro screenWidth={screenWidth} />
      <WriteUp index={0} />
      <JuicelineExamples screenWidth={screenWidth} transition={transition} />
      <WriteUp screenWidth={screenWidth} index={1} />
      <HondaExamples screenWidth={screenWidth} transition={transition} />
      <WriteUp screenWidth={screenWidth} index={2} />
      <JubeckExamples screenWidth={screenWidth} transition={transition} />
      <About />
    </div>
  );
}

export default App;
