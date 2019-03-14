import React, { useState, useEffect } from "react";
import Intro from "./components/Intro.jsx";
import WriteUp from "./components/WriteUp.jsx";
import JuicelineExamples from './components/JuicelineExamples.jsx';
import HondaExamples from './components/HondaExamples.jsx';
import JubeckExamples from './components/JubeckExamples.jsx';
import About from './components/About.jsx'


const App = () => {

  let [top, setTop] = useState(0);

  const getSize = () => {
    return {
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    };
  }

  let [windowSize, setWindowSize] = useState(getSize());

  const handleResize = () => {
    setWindowSize(getSize());
  }

  useEffect(() => {
    setTop(window.scrollY);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const screenWidth = windowSize.innerWidth;
  const transition = "transform 2s";
  const notTop = top !== 0;

  return (
    <div className="App">
      <Intro screenWidth={screenWidth} />
      <WriteUp
        index={0}
        lineHeight={1.4}
        notTop={notTop}
      />
      <JuicelineExamples
        screenWidth={screenWidth}
        transition={transition}
        notTop={notTop}
      />
      <WriteUp
        screenWidth={screenWidth}
        index={1}
        lineHeight={2}
        notTop={notTop}
      />
      <HondaExamples
        screenWidth={screenWidth}
        transition={transition}
        notTop={notTop}
      />
      <WriteUp
        screenWidth={screenWidth}
        index={2}
        lineHeight={1.75}
        notTop={notTop}
      />
      <JubeckExamples
        screenWidth={screenWidth}
        transition={transition}
      />
      <About screenWidth={screenWidth} />
    </div>
  );
}

export default App;
