import React, { useState, useEffect } from "react";
import { Waypoint } from 'react-waypoint';
import juicelineDesktop from '../images/portfolio/juicelineDesktop.png';
import juicelineMobile from '../images/portfolio/juicelineMobile.png';
import juicelineList from '../images/portfolio/juicelineList.png';

const JuicelineExamples = props => {
    const { xs, sm, md, lg, xl, transition, notTop } = props;
    const [img1, setImg1] = useState(false);
    const [img2, setImg2] = useState(false);
    const [img3, setImg3] = useState(false);
    useEffect(() => {
        if (notTop) {
            setImg1(true);
            setImg2(true);
            setImg3(true);
        }
    }, [notTop]);
    const _trigger = (num) => {
        return num === 1 ? setImg1(true) : num === 2 ? setImg2(true) : num === 3 ? setImg3(true) : setImg2(true) + setImg3(true);
    }
    const areas = xs ? `
                ". img1 img1 img1 img1 img1 img1 img1 img1 img1 img1 ."
                ". .    img2 img2 img2 img2 img2 img2 img2 img2 .    ."
                ". .    img3 img3 img3 img3 img3 img3 img3 img3 .    ."` :
        sm || md ?
            `
                ". img1 img1 img1 img1 img1 img1 img1 img1 img1 img1 ."
                ". img2 img2 img2 img2 .    .    img3 img3 img3 img3 ."` : lg || xl ?
                `
                ". . img1 img1 img1 img1 img1 img1 img1 img1 . ."
                ". . img2 img2 img2 .    .    img3 img3 img3 . ."` :
                `
                ". . . img1 img1 img1 img1 img1 img1 . . ."
                ". . . img2 img2 .    .    img3 img3 . . ."`;
    const styles = {
        JuicelineExamples: {
            backgroundColor: "#F7F7F7",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridRowColumns: "auto",
            gridTemplateAreas: areas,
        },
        juicelineDesktop: {
            gridArea: "img1",
            padding: xs ? "7rem 0 5rem 0" : sm ? "10rem 0 8rem 0" : "14rem 0 12rem 0",
            transition: transition,
            transform: img1 ? "translateY(0)" : "translateY(50px)",
        },
        juicelineMobile: {
            gridArea: "img2",
            transition: transition,
            transform: img2 ? "translateY(0)" : "translateY(50px)",
        },
        juicelineList: {
            gridArea: "img3",
            position: "relative",
            padding: xs ? "5rem 0 7rem 0" : sm ? "8rem 0 10rem 0" : "12rem 0 14rem 0",
            transition: transition,
            transform: img3 ? "translateY(0)" : "translateY(50px)",
        },
    }
    return (
        <div className="JuicelineExamples" >
            <Waypoint onEnter={_trigger.bind(null, 1)}>
                <div style={styles.JuicelineExamples}>
                    <img src={juicelineDesktop} className="juicelineDesktop example" style={styles.juicelineDesktop} alt="Juiceline Example 1" />
                </div>
            </Waypoint>
            {xs ?
                <div>
                    <Waypoint onEnter={_trigger.bind(null, 2)}>
                        <div style={styles.JuicelineExamples}>
                            <img src={juicelineMobile} className="juicelineMobile example" style={styles.juicelineMobile} alt="Juiceline Example 2" />
                        </div>
                    </Waypoint>
                    <Waypoint onEnter={_trigger.bind(null, 3)}>
                        <div style={styles.JuicelineExamples}>
                            <img src={juicelineList} className="juicelineList example" style={styles.juicelineList} alt="Juiceline Example 3" />
                        </div>
                    </Waypoint>
                </div>
                :
                <Waypoint onEnter={_trigger}>
                    <div style={styles.JuicelineExamples}>
                        <img src={juicelineMobile} className="juicelineMobile example" style={styles.juicelineMobile} alt="Juiceline Example 2" />
                        <img src={juicelineList} className="juicelineList example" style={styles.juicelineList} alt="Juiceline Example 3" />
                    </div>
                </Waypoint>}
        </div >
    );
}

export default JuicelineExamples;