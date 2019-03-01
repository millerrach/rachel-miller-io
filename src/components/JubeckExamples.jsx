import React, { useState } from "react";
import jubeck_1 from '../images/portfolio/jubeck_1.png';
import jubeck_2 from '../images/portfolio/jubeck_2.png';

const JubeckExamples = props => {
    const { width } = props;
    const sm = width < 600;
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
        jubeck_1: { gridArea: "img1", margin: "20% 0 20% 0" },
        jubeck_2: { gridArea: "img2", margin: "0 0 25% 0" },
    }
    return (
        <div className="JubeckExamples" style={styles.JubeckExamples}>
            <img src={jubeck_1} className="jubeck_1 example" style={styles.jubeck_1} alt="Jubeck Example 1" />
            <img src={jubeck_2} className="jubeck_2 example" style={styles.jubeck_2} alt="Jubeck Example 2" />
        </div>
    );
}

export default JubeckExamples;