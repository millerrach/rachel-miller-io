import React, { useState } from "react";
import { Waypoint } from 'react-waypoint';
import croatia from '../images/about/croatia.jpg';
import Github from '../images/links/github.jsx'


const heading = "2em";
const text = "1.5em";

const About = props => {
    const { screenWidth } = props;
    const smMd = screenWidth < 800;
    const [github, setGithub] = useState(false);
    const _trigger = () => {
        setGithub(true)
    }
    const styles = {
        About: {
            color: "#fff",
            display: "grid",
            position: "relative",
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
            ". amI amI amI amI amI amI . . . ."
            ". thx thx thx thx thx thx . . . ."
            `,
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
            opacity: github ? 1 : 0,
            transition: "opacity 1s",
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
                <div className="whereAmI" style={styles.whereAmI}>
                    <div style={{ fontSize: heading, paddingBottom: "1em", fontWeight: 700 }}>Where am I?</div>
                    <div style={{ fontSize: text }}>In the last 2.5 years, my husband and I have lived in 16 countries. We are currently in Croatia but soon headed to Minneapolis, MN.</div>
                </div>
                <div className="thanks" style={styles.thanks}>
                    <div style={{ fontSize: heading, fontWeight: 700 }}>Thank You.</div>
                    <div style={{ fontSize: text, padding: "0.5em 0px 1.5em 0", fontWeight: 300 }}>mail@rachelmiller.io</div>
                    <div className="githubContainer" style={styles.githubContainer}>
                        <Github width="2.25em" />
                    </div>
                    <Waypoint onEnter={_trigger}>
                        <div className="siteBottom" style={styles.siteBottom}></div>
                    </Waypoint>
                </div>
            </div>
        </div >
    )
}

export default About;