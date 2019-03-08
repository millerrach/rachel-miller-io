import React, { useState } from "react";
import { Waypoint } from 'react-waypoint';
import juicelineDesktop from '../images/portfolio/juicelineDesktop.png';
import juicelineMobile from '../images/portfolio/juicelineMobile.png';
import juicelineList from '../images/portfolio/juicelineList.png';
import juicelineAdmin from '../images/portfolio/juicelineAdmin.png';


const JuicelineExamples = props => {
    const { screenWidth, transition } = props;
    const [img1, setImg1] = useState(false);
    const [img2, setImg2] = useState(false);
    const [img3, setImg3] = useState(false);
    const [img4, setImg4] = useState(false);
    const sm = screenWidth < 600;
    const _trigger = (num) => {
        return num === 1 ? setImg1(true) : num === 2 ? setImg2(true) : num === 3 ? setImg3(true) : num === 4 ? setImg4(true) : setImg2(true) + setImg3(true);
    }
    const areas = sm ? `
                ". img1 img1 img1 img1 img1 img1 img1 img1 img1 img1 ."
                ". .    img2 img2 img2 img2 img2 img2 img2 img2 .    ."
                ". .    img3 img3 img3 img3 img3 img3 img3 img3 .    ."
                ". img4 img4 img4 img4 img4 img4 img4 img4 img4 img4 ."` :
        `
                ". img1 img1 img1 img1 img1 img1 img1 img1 img1 img1 ."
                ". img2 img2 img2 img2 .    .    img3 img3 img3 img3 ."
                ". img4 img4 img4 img4 img4 img4 img4 img4 img4 img4 ."`;
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
            padding: "20% 0 20% 0",
            transition: transition,
            transform: img1 ? "translateY(0)" : "translateY(50px)",
        },
        juicelineMobile: {
            gridArea: "img2",
            marginBottom: sm ? "20%" : null,
            transition: transition,
            transform: img2 ? "translateY(0)" : "translateY(50px)",
        },
        juicelineList: {
            gridArea: "img3",
            position: "relative",
            top: sm ? null : "15%",
            transition: transition,
            transform: img3 ? "translateY(0)" : "translateY(50px)",
        },
        juicelineAdmin: {
            gridArea: "img4",
            padding: sm ? "20% 0 25% 0" : "20% 0 40% 0",
            position: "relative",
            top: sm ? null : "15%",
            transition: transition,
            transform: img4 ? "translateY(0)" : "translateY(50px)",
        },
    }
    return (
        <div className="JuicelineExamples" >
            <Waypoint onEnter={_trigger.bind(null, 1)}>
                <div style={styles.JuicelineExamples}>
                    <img src={juicelineDesktop} className="juicelineDesktop example" style={styles.juicelineDesktop} alt="Juiceline Example 1" />
                </div>
            </Waypoint>
            {sm ?
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

            <Waypoint onEnter={_trigger.bind(null, 4)}>
                <div style={styles.JuicelineExamples}>
                    <img src={juicelineAdmin} className="juicelineAdmin example" style={styles.juicelineAdmin} alt="Juiceline Example 4" />
                </div>
            </Waypoint>
        </div >
    );
}

export default JuicelineExamples;