import React, { useState, useEffect } from "react";
import Intro from "./components/Intro.jsx";
import WriteUp from "./components/WriteUp.jsx";
import JuicelineExamples from './components/JuicelineExamples.jsx';
import HondaExamples from './components/HondaExamples.jsx';
import JubeckExamples from './components/JubeckExamples.jsx';
import About from './components/About.jsx'


const App = () => {

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
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  window.onscroll = function (e) {
    // false if direction is down and true if up
    console.log(this.oldScroll > this.scrollY);
    this.oldScroll = this.scrollY;
  }

  const screenWidth = windowSize.innerWidth;
  const transition = "transform 2s";
  return (
    <div className="App">
      <Intro screenWidth={screenWidth} />
      <WriteUp index={0} alignBottom={true} />
      <JuicelineExamples screenWidth={screenWidth} transition={transition} />
      <WriteUp screenWidth={screenWidth} index={1} alignBottom={false} />
      <HondaExamples screenWidth={screenWidth} transition={transition} />
      <WriteUp screenWidth={screenWidth} index={2} alignBottom={true} />
      <JubeckExamples screenWidth={screenWidth} transition={transition} />
      {/* <Stack /> */}
      <About screenWidth={screenWidth} />
    </div>
  );
}

export default App;
