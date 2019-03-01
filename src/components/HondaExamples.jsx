import React, { useState } from "react";
import { Waypoint } from 'react-waypoint';
import honda_1 from '../images/portfolio/honda_1.png';
import honda_2 from '../images/portfolio/honda_2.png';


const HondaExamples = props => {
    const { width, transition } = props;
    const [img1, setImg1] = useState(false);
    const [img2, setImg2] = useState(false);
    const sm = width < 600;
    const areas = sm ? `
                ". img1 img1 img1 img1 img1 img1 img1 img1 img1 img1 ."
                ". img2 img2 img2 img2 img2 img2 img2 img2 img2 img2 ."` :
        `
                ". .    img1 img1 img1 img1 img1 img1 img1 img1 img1 ."
                ". img2 img2 img2 img2 img2 img2 img2 img2 img2 .    ."`;
    const styles = {
        HondaExamples: {
            backgroundColor: "rgba(214, 229, 226, .7",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridRowColumns: "auto",
            gridTemplateAreas: areas,
        },
        honda_1: {
            gridArea: "img1",
            margin: "20% 0 20% 0",
            transition: transition,
            transform: img1 ? "translateY(0)" : "translateY(50px)",
        },
        honda_2: {
            gridArea: "img2",
            margin: "0 0 25% 0",
            transition: transition,
            transform: img2 ? "translateY(0)" : "translateY(50px)",
        },
    }
    const _true = (num) => {
        return num === 1 ? setImg1(true) : num === 2 ? setImg2(true) : null;
    }
    return (
        <div className="HondaExamples" style={styles.HondaExamples}>
            <Waypoint onEnter={_true.bind(null, 1)}>
                <img src={honda_1} className="honda_1 example" style={styles.honda_1} alt="Honda Example 1" />
            </Waypoint>
            <Waypoint onEnter={_true.bind(null, 2)}>
                <img src={honda_2} className="honda_2 example" style={styles.honda_2} alt="Honda Example 2" />
            </Waypoint>
        </div>
    );
}

export default HondaExamples;