import React, { Component } from 'react';
import juicelineDesktop from '../images/portfolio/juicelineDesktop.png';
import juicelineMobile from '../images/portfolio/juicelineMobile.png';
import juicelineList from '../images/portfolio/juicelineList.png';
import juicelineAdmin from '../images/portfolio/juicelineAdmin.png';

class JuicelineExamples extends Component {
    render() {
        const { width } = this.props;
        const sm = width < 600;
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
                margin: "20% 0 20% 0",
            },
            juicelineMobile: {
                gridArea: "img2",
                marginBottom: sm ? "20%" : null,
            },
            juicelineList: {
                gridArea: "img3",
            },
            juicelineAdmin: {
                gridArea: "img4",
                margin: "20% 0 25% 0",
            },
        }
        return (
            <div className="JuicelineExamples" style={styles.JuicelineExamples} >
                <img src={juicelineDesktop} className="juicelineDesktop" style={styles.juicelineDesktop} alt="Juiceline Example 1" />
                <img src={juicelineMobile} className="juicelineMobile" style={styles.juicelineMobile} alt="Juiceline Example 2" />
                <img src={juicelineList} className="juicelineList" style={styles.juicelineList} alt="Juiceline Example 3" />
                <img src={juicelineAdmin} className="juicelineAdmin" style={styles.juicelineAdmin} alt="Juiceline Example 4" />
            </div >
        );
    }
}

export default JuicelineExamples;