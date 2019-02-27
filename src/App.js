import React, { useState, useEffect } from "react";
import Intro from "./components/Intro.jsx";
import WriteUp from "./components/WriteUp.jsx";
import JuicelineExamples from './components/JuicelineExamples.jsx';
import HondaExamples from './components/HondaExamples.jsx';
import JubeckExamples from './components/JubeckExamples.jsx';

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
  const width = windowSize.innerWidth;
  return (
    <div className="App">
      <Intro width={width} />
      <WriteUp width={width} index={0} short={true} />
      <JuicelineExamples width={width} />
      <WriteUp width={width} index={1} short={false} />
      <HondaExamples width={width} />
      <WriteUp width={width} index={2} short={false} />
      <JubeckExamples width={width} />
    </div>
  );
}

export default App;
