import React, { useEffect } from "react";
import denmark from '../images/about/denmark.jpg'
import ireland from '../images/about/ireland.jpg';
import croatia from '../images/about/croatia.jpg';


const skills = ['React', 'JS', 'HTML5', 'CSS3', 'Material UI', 'Sass', 'Figma', 'Git']

const About = props => {
    const { screenWidth } = props;
    const smMd = screenWidth < 800;
    const styles = {
        denmark: {
            position: "sticky",
            top: 0,
            zIndex: 0,
            width: "100%",
            objectFit: "cover",
            height: smMd ? "100vh" : null,
        },
        stack: {
            fontWeight: "900",
            fontSize: "2em",
            position: "relative",
            zIndex: 1,
            color: "#fff"
        }
    }
    return (
        <div>
            <img src={denmark} className="denmark" alt="denmark" style={styles.denmark} />
            {/* <img src={ireland} className="ireland" alt="ireland" /> */}
            {/* <img src={croatia} className="croatia" alt="croatia" /> */}
            <div className="Stack" style={styles.stack}>
                {skills.map((skill, i) => <div key={i}>{skill}</div>)}
            </div>
        </div>
    )
}

export default About;