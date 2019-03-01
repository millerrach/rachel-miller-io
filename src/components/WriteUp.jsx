import React, { useState } from "react";
import { Waypoint } from 'react-waypoint';
import { useTrail, animated } from 'react-spring'

const writeUps = [
  {
    name: "Juiceline",
    description:
      "Made for a juice company in Budapest, Hungary. A progressive web app that allows customers to see what's offered at the current moment.",
    stack: ["Figma", "React", "JS", "CSS3", "Sass"]
  },
  {
    name: "Honda",
    description:
      "This project was done for Portlight Technologies. It’s a touch-screen app that ‘s displayed at Honda dealerships. It allows the user to view available makes, models, specs, colors, trim levels and current offers.",
    stack: ["JS", "HTML5", "CSS3", "Sass"]
  },
  {
    name: "Jubeck Brewery",
    description:
      "This project was done for Jubeck New World Brewing. They were looking to track their beer memberships but couldn’t find a solution, so they came to us for a custom app. This allows them to add pints and growlers and also edit and renew memberships.",
    stack: ["React", "Redux", "MUI", "JS", "CSS3", "Sass"]
  },
];

const WriteUp = props => {
  const { index } = props;
  const styles = {
    WriteUpStyle: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateAreas: `
      ". nade nade nade nade nade nade nade . stac stac . "`,
      margin: "3em 0",
    },
    nameDesc: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gridArea: "nade",
    },
    stack: {
      gridArea: "stac",
      placeSelf: "end",
      lineHeight: "1.3"
    },
  };
  const wui = writeUps[index];
  const skills = wui.stack;
  const nameLocaDesc = [wui.name, wui.location, wui.description]
  //react-spring
  const [toggle, setToggle] = useState(false);
  const config = { mass: 10, tension: 1500, friction: 200 };
  const trail = useTrail(skills.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    from: { opacity: 0, x: 20 },
  })
  //end react-spring
  const _toggle = () => {
    setToggle(true);
  }
  return (
    <Waypoint onEnter={_toggle}>
      <div className="WriteUp" style={styles.WriteUpStyle}>
        <div className="nameDesc" style={styles.nameDesc}>
          {trail.map(({ x, ...rest }, i) => (
            <animated.div
              key={i}
              className="trails-text"
              style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
              <animated.div>{nameLocaDesc[i]}</animated.div>
            </animated.div>
          ))}
        </div>
        <div className="stack" style={styles.stack}>
          {trail.map(({ x, ...rest }, i) => (
            <animated.div
              key={skills[i]}
              className="trails-text"
              style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
              <animated.div>{skills[i]}</animated.div>
            </animated.div>
          ))}
        </div>
      </div>
    </Waypoint>
  );
}

export default WriteUp;
