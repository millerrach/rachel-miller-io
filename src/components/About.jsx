import React, { useState } from "react";
import { Waypoint } from 'react-waypoint';
import croatia from '../images/about/croatia.jpg';
import Github from '../images/links/github.jsx'


const heading = { fontSize: "2rem", fontWeight: 700 };
const githubWidth = 50;

const skills = ['React', 'JS', 'HTML5', 'CSS3', 'Material UI', 'Sass', 'Figma', 'Sketch', 'Git'];

const About = props => {
    const { screenWidth } = props;
    const smMd = screenWidth < 800;
    const [showGithub, setGithub] = useState(false);
    const _toggle = () => {
        setGithub(!showGithub)
    }
    const styles = {
        About: {
            color: "#fff",
            display: "grid",
            position: "relative",
            fontSize: "1.5rem",
        },
        croatia: {
            position: "sticky",
            top: 0,
            zIndex: 0,
            width: "100%",
            objectFit: "cover",
            height: smMd ? "100vh" : null,
        },
        scrollingText: {
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateAreas: `
            ". stc stc stc stc stc stc . . . ."
            ". amI amI amI amI amI amI . . . ."
            ". thx thx .   .   .   .   . . . ."
            `,
        },
        skills: {
            position: "relative",
            zIndex: 1,
            gridArea: "stc",
            height: "90vh",
        },
        whereAmI: {
            position: "relative",
            zIndex: 1,
            gridArea: "amI",
            height: "60vh",
        },
        thanks: {
            position: "relative",
            zIndex: 1,
            gridArea: "thx",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
        },
        githubContainer: {
            opacity: showGithub ? 1 : 0,
            transition: "opacity 1s",
            width: githubWidth,
        },
        siteBottom: {
            position: "absolute",
            height: 5,
            bottom: 0,
        }
    }
    return (
        <div className="About" style={styles.About} >
            <img src={croatia} className="croatia" alt="croatia" style={styles.croatia} />
            <div className="scrollingText" style={styles.scrollingText}>
                <div id="skills" style={styles.skills}>
                    <div className="myStack" style={heading}>My Stack</div>
                    <div className="skills" style={{ paddingTop: "1em" }}>{skills.map((skill, i) => <div key={i}>{skill}</div>)}</div>
                </div>
                <div className="whereAmI" style={styles.whereAmI}>
                    <div style={heading}>Where am I?</div>
                    <div style={{ paddingTop: "1em" }}>In the last 2.5 years, my husband and I have lived in 16 countries. We are currently in Croatia but soon headed to Minneapolis, MN.</div>
                </div>
                <div className="thanks" style={styles.thanks}>
                    <div style={heading}>Thank You.</div>
                    <div style={{ padding: "0.5em 0px 1.5em 0", fontWeight: 300 }}>mail@rachelmiller.io</div>
                    <div className="githubContainer" style={styles.githubContainer}>
                        <Github width={githubWidth} absolute={true} />
                    </div>
                    <Waypoint onEnter={_toggle} onLeave={_toggle}>
                        <div className="siteBottom" style={styles.siteBottom}></div>
                    </Waypoint>
                </div>
            </div >
        </div >
    )
}

export default About;