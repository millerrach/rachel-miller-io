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
  const xs = screenWidth < 768;
  const sm = screenWidth >= 768 && screenWidth < 992;
  const md = screenWidth >= 992 && screenWidth < 1200;
  const lg = screenWidth >= 1200 && screenWidth < 2560;
  const xl = screenWidth >= 2560 && screenWidth < 4000;
  const transition = "transform 2s";
  const notTop = top !== 0;

  return (
    <div className="App">
      <Intro
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
        screenWidth={screenWidth}
      />
      <WriteUp
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        index={0}
        notTop={notTop}
      />
      <JuicelineExamples
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
        transition={transition}
        notTop={notTop}
      />
      <WriteUp
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        index={1}
        notTop={notTop}
      />
      <HondaExamples
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        transition={transition}
        notTop={notTop}
      />
      <WriteUp
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        index={2}
        notTop={notTop}
      />
      <JubeckExamples
        xs={xs}
        sm={sm}
        md={md}
        transition={transition}
        notTop={notTop}
      />
      <About
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
      />
    </div>
  );
}

export default App;
