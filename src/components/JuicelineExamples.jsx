import React, { Component } from 'react';
import juicelineDesktop from '../images/portfolio/juicelineDesktop.png';
import juicelineMobile from '../images/portfolio/juicelineMobile.png';
import juicelineList from '../images/portfolio/juicelineList.png';
import juicelineAdmin from '../images/portfolio/juicelineAdmin.png';

class JuicelineExamples extends Component {
    render() {
        const styles = {
            JuicelineExamples: {
                backgroundColor: "#F7F7F7",
                width: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gridRowColumns: "repeat(3, 1fr)",
            },
            juicelineDesktop: { gridArea: "1 / 2 / 2 / 12", padding: "6em 0 4em 0" },
            juicelineMobile: { gridArea: "2 / 2 / 3 / 6" },
            juicelineList: { gridArea: "2 / 8 / 3 / 12", paddingTop: "8em" },
            juicelineAdmin: { gridArea: "3 / 2 / 4 / 12", padding: "4em 0 6em 0" },
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