import React, { Component } from "react";
import Intro from "./components/Intro.jsx";
import WriteUp from "./components/WriteUp.jsx";
import JuicelineExamples from './components/JuicelineExamples.jsx';

class App extends Component {
  state = {
    width: 0,
    height: 0
  };
  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    const { width } = this.state;
    return (
      <div className="App">
        <Intro width={width} />
        <WriteUp index={0} />
        <JuicelineExamples />
      </div>
    );
  }
}

export default App;
