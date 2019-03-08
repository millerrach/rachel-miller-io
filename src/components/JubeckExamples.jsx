import React, { useState } from "react";
import { Waypoint } from 'react-waypoint';
import jubeck_1 from '../images/portfolio/jubeck_1.png';
import jubeck_2 from '../images/portfolio/jubeck_2.png';


const JubeckExamples = props => {
    const { screenWidth, transition } = props;
    const [img1, setImg1] = useState(false);
    const [img2, setImg2] = useState(false);
    const sm = screenWidth < 600;
    const _trigger = (num) => {
        return num === 1 ? setImg1(true) : num === 2 ? setImg2(true) : null;
    }
    const areas = sm ? `
                ". img1 img1 img1 img1 img1 img1 img1 img1 img1 img1 ."
                ". img2 img2 img2 img2 img2 img2 img2 img2 img2 img2 ."` :
        `
                ". img1 img1 img1 img1 img1 img1 img1 img1 img1 .    ."
                ". .    img2 img2 img2 img2 img2 img2 img2 img2 img2 ."`;
    const styles = {
        JubeckExamples: {
            backgroundColor: "#EDF2F4",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridRowColumns: "auto",
            gridTemplateAreas: areas,
        },
        jubeck_1: {
            gridArea: "img1",
            margin: "20% 0 20% 0",
            transition: transition,
            transform: img1 ? "translateY(0)" : "translateY(50px)",
        },
        jubeck_2: {
            gridArea: "img2",
            margin: "0 0 25% 0",
            transition: transition,
            transform: img2 ? "translateY(0)" : "translateY(50px)",
        },
    }
    return (
        <div className="JubeckExamples" style={styles.JubeckExamples}>
            <Waypoint onEnter={_trigger.bind(null, 1)}>
                <img src={jubeck_1} className="jubeck_1 example" style={styles.jubeck_1} alt="Jubeck Example 1" />
            </Waypoint>
            <Waypoint onEnter={_trigger.bind(null, 2)}>
                <img src={jubeck_2} className="jubeck_2 example" style={styles.jubeck_2} alt="Jubeck Example 2" />
            </Waypoint>
        </div>
    );
}

export default JubeckExamples;