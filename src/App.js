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
  const lg = screenWidth >= 1200;
  const belowOr1024 = screenWidth <= 1024;
  const mobileTablet = screenWidth < 1200;
  const transition = "transform 2s";
  const notTop = top !== 0;

  return (
    <div className="App">
      <Intro xs={xs} screenWidth={screenWidth} />
      <WriteUp
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        index={0}
        lineHeight={belowOr1024 ? 1.4 : 1.3}
        notTop={notTop}
      />
      <JuicelineExamples
        xs={xs}
        transition={transition}
        notTop={notTop}
      />
      <WriteUp
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        index={1}
        lineHeight={belowOr1024 ? 2 : 1.75}
        notTop={notTop}
      />
      <HondaExamples
        xs={xs}
        transition={transition}
        notTop={notTop}
      />
      <WriteUp
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        index={2}
        lineHeight={belowOr1024 ? 1.75 : 1.3}
        notTop={notTop}
      />
      <JubeckExamples
        xs={xs}
        transition={transition}
        notTop={notTop}
      />
      <About mobileTablet={mobileTablet} />
    </div>
  );
}

export default App;
