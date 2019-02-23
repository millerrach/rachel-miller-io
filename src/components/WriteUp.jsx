import React, { Component } from "react";

const writeUps = [
  {
    name: "Juiceline",
    location: "Budapest, Hungary",
    descrip:
      "A progressive web app that allows customers to see what's offered at the current moment.",
    stack: ["Figma", "React", "JS", "CSS3", "Sass"]
  }
];

class WriteUp extends Component {
  render(props) {
    const WriteUpStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridGap: 20,
    }  
    const index = this.props.index;
    const wui = writeUps[index];
    return (
      <div className="WriteUp" style={{WriteUpStyle}}>
        <div className="name">{wui.name}</div>
        <div className="location">{wui.location}</div>
        <div className="description">{wui.description}</div>
        <div className="stack">{wui.stack.map((each, i)=><div className="skill" key={i}>{each}</div>)}</div>
      </div>
    );
  }
}

export default WriteUp;
