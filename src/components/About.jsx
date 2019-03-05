import React from "react";
import croatia from '../images/about/croatia.jpg';

const heading = "2em";
const text = "1.5em";

const About = props => {
    const { screenWidth } = props;
    const smMd = screenWidth < 800;
    const styles = {
        About: {
            color: "#fff",
            display: "grid",
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
        },
        thanks: {
            position: "relative",
            zIndex: 1,
            gridArea: "thx",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
        }
    }
    return (
        <div className="About" style={styles.About}>
            <img src={croatia} className="croatia" alt="croatia" style={styles.croatia} />
            <div className="scrollingText" style={styles.scrollingText}>
                <div className="whereAmI" style={styles.whereAmI}>
                    <div style={{ fontSize: heading }}>Where am I?</div>
                    <div style={{ fontSize: text }}>In the last 2.5 years, my husband and myself have lived in 16 countries. Currently in Croatia but soon headed to Minneapolis, MN.</div>
                </div>
                <div className="thanks" style={styles.thanks}>
                    <div style={{ fontSize: heading }}>Thanks!</div>
                    <div style={{ fontSize: text }}>mail@rachelmiller.io</div>
                </div>
            </div>
        </div>
    )
}

export default About;