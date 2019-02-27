import React, { useState } from "react";
import { useTrail, animated } from 'react-spring'


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

const WriteUp = props => {
  const { width, index, short } = props;
  const sm = width < 600;
  const areas = short ?
    `
        ".    name name name name name name name name stac stac .   "
        ".    desc desc desc desc desc desc desc .    stac stac .   "` :

    `
        ".    name name name name name name name name .    .    .   "
        ".    desc desc desc desc desc desc desc .    stac stac .   "`;
  const styles = {
    WriteUpStyle: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: "min-content 1fr",
      gridTemplateAreas: areas,
      margin: "3em 0",
    },
    nameLocation: {
      gridArea: "name",
      marginBottom: "1em",
    },
    description: {
      gridArea: "desc",
    },
    stackShort: {
      gridArea: "stac",
      placeSelf: "end",
      lineHeight: "1.3"
    },
    stackLong: {
      gridArea: "stac",
      alignSelf: "start",
      justifySelf: "end",
      lineHeight: "1.3"
    }
  };
  const wui = writeUps[index];
  const lengthStack = short ? styles.stackShort : styles.stackLong;
  const items = wui.stack;
  const config = { mass: 10, tension: 1500, friction: 200 };
  const [toggle, set] = useState(true)
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    from: { opacity: 0, x: 20 },
  })
  return (
    <div className="WriteUp" style={styles.WriteUpStyle}>
      <div className="nameLocation" style={styles.nameLocation}>
        <div className="name">{wui.name}</div>
        <div className="location">{wui.location}</div>
      </div>
      <div className="description" style={styles.description}>{wui.description}</div>
      <div className="stack" style={lengthStack}>
        <div className="trails-main" onClick={() => set(state => !state)}>
          <div>
            {trail.map(({ x, ...rest }, index) => (
              <animated.div
                key={items[index]}
                className="trails-text"
                style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                <animated.div>{items[index]}</animated.div>
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteUp;
