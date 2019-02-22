import React, { Component } from "react";
import "./style/css/main.css";
import Intro from "./components/Intro.jsx";
import WriteUp from "./components/WriteUp.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <WriteUp />
      </div>
    );
  }
}

export default App;
