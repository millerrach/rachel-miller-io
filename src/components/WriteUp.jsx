import React, { Component } from "react";

const writeUps = [
  {
    name: "Juiceline",
    location: "Budapest, Hungary",
    description:
      "A progressive web app that allows customers to see what's offered at the current moment.",
    stack: ["Figma", "React", "JS", "CSS3", "Sass"]
  }
];

class WriteUp extends Component {
  render(props) {
    const styles = {
      WriteUpStyle: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridTemplateRows: "min-content 1fr",
        padding: "3em 0",
      },
      nameLocation: {
        gridArea: "1 / 2 / 2 / 7",
        paddingBottom: "1em",
      },
      description: {
        gridArea: "2 / 2 / 3 / 7",
      },
      stack: {
        gridArea: "1 / 10 / 3 / 12",
        placeSelf: "end",
        lineHeight: "1.3"
      }
    };
    const index = this.props.index;
    const wui = writeUps[index];
    return (
      <div className="WriteUp" style={styles.WriteUpStyle}>
        <div className="nameLocation" style={styles.nameLocation}>
          <div className="name">{wui.name}</div>
          <div className="location">{wui.location}</div>
        </div>
        <div className="description" style={styles.description}>{wui.description}</div>
        <div className="stack" style={styles.stack}>
          {wui.stack.map((each, i) => (
            <div className="skill" key={i}>
              {each}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default WriteUp;
