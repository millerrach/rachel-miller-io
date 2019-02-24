import React, { Component } from "react";

const writeUps = [
  {
    name: "Juiceline",
    location: "Budapest, Hungary",
    description:
      "A progressive web app that allows customers to see what's offered at the current moment.",
    stack: ["Figma", "React", "JS", "CSS3", "Sass"]
  },
  {
    name: "Honda",
    location: "",
    description:
      "This project was done for Portlight Technologies. It’s a touch-screen app that ‘s displayed at Honda dealerships. It allows the user to view available makes, models, specs, colors, trim levels and current offers.",
    stack: ["JS", "HTML5", "CSS3", "Sass"]
  },
  {
    name: "Jubeck Brewery",
    location: "",
    description:
      "This project was done for Jubeck New World Brewing. They were looking to track their beer memberships but couldn’t find a solution, so they came to us for a custom app. This allows them to add pints and growlers and also edit and renew memberships.",
    stack: ["React", "Redux", "MUI", "JS", "CSS3", "Sass"]
  },
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
      stackShort: {
        gridArea: "1 / 10 / 3 / 12",
        placeSelf: "end",
        lineHeight: "1.3"
      },
      stackLong: {
        gridArea: "2 / 10 / 3 / 12",
        alignSelf: "start",
        justifySelf: "end",
        lineHeight: "1.3"
      }
    };
    const { index, short } = this.props;
    const wui = writeUps[index];
    const lengthStack = short ? styles.stackShort : styles.stackLong;
    return (
      <div className="WriteUp" style={styles.WriteUpStyle}>
        <div className="nameLocation" style={styles.nameLocation}>
          <div className="name">{wui.name}</div>
          <div className="location">{wui.location}</div>
        </div>
        <div className="description" style={styles.description}>{wui.description}</div>
        <div className="stack" style={lengthStack}>
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
