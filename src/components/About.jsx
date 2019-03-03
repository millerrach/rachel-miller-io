import React, { useEffect } from "react";
import hungary from '../images/about/hungary.jpg'
import ireland from '../images/about/ireland.jpg';
import croatia from '../images/about/croatia.jpg';
import Stack from './Stack.jsx'


const About = () => {
    return (
        <div>
            <img src={hungary} className="hungary" alt="hungary" />
            {/* <img src={ireland} className="ireland" alt="ireland" />
            <img src={croatia} className="croatia" alt="croatia" /> */}
            <Stack />
        </div>
    )
}

export default About;