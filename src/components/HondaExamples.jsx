import React, { Component } from 'react';
import honda_1 from '../images/portfolio/honda_1.png';
import honda_2 from '../images/portfolio/honda_2.png';

class HondaExamples extends Component {
    render() {
        const { width } = this.props;
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
            honda_1: { gridArea: "img1", margin: "20% 0 20% 0" },
            honda_2: { gridArea: "img2", margin: "0 0 25% 0" },
        }
        return (
            <div className="HondaExamples" style={styles.HondaExamples}>
                <img src={honda_1} className="honda_1" style={styles.honda_1} alt="Honda Example 1" />
                <img src={honda_2} className="honda_2" style={styles.honda_2} alt="Honda Example 2" />
            </div>
        );
    }
}

export default HondaExamples;