import React, { useState, useEffect } from "react";
import { Waypoint } from 'react-waypoint';
import jubeck_1 from '../images/portfolio/jubeck_1.png';
import jubeck_2 from '../images/portfolio/jubeck_2.png';


const JubeckExamples = props => {
    const { xs, sm, md, transition, notTop } = props;
    const [img1, setImg1] = useState(false);
    const [img2, setImg2] = useState(false);
    useEffect(() => {
        if (notTop) {
            setImg1(true);
            setImg2(true);
        }
    }, [notTop]);
    const _trigger = (num) => {
        return num === 1 ? setImg1(true) : num === 2 ? setImg2(true) : null;
    }
    const areas = xs ? `
                ". img1 img1 img1 img1 img1 img1 img1 img1 img1 img1 ."
                ". img2 img2 img2 img2 img2 img2 img2 img2 img2 img2 ."` :
        sm || md ?
            `
                ". img1 img1 img1 img1 img1 img1 img1 img1 img1 .    ."
                ". .    img2 img2 img2 img2 img2 img2 img2 img2 img2 ."` :
            `
                ". . img1 img1 img1 img1 img1 img1 img1 .    . ."
                ". . .    img2 img2 img2 img2 img2 img2 img2 . ."`;
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
            padding: xs ? "7rem 0 5rem 0" : sm ? "10rem 0 8rem 0" : "14rem 0 12rem 0",
            transition: transition,
            transform: img1 ? "translateY(0)" : "translateY(50px)",
        },
        jubeck_2: {
            gridArea: "img2",
            paddingBottom: xs ? "7rem" : sm ? "10rem" : "14rem",
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