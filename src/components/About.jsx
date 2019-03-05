import React from "react";
import ireland from '../images/about/ireland.jpg';
import croatia from '../images/about/croatia.jpg';


const About = props => {
    const { screenWidth } = props;
    const smMd = screenWidth < 800;
    const styles = {
        ireland: {
            position: "sticky",
            top: 0,
            zIndex: 0,
            width: "100%",
            objectFit: "cover",
            height: smMd ? "100vh" : null,
        },
    }
    return (
        <div className="About">
            <img src={ireland} className="ireland" alt="ireland" style={styles.ireland} />
            <img src={croatia} className="croatia" alt="croatia" />
        </div>
    )
}

export default About;