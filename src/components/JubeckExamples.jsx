import React, { useState, useEffect } from "react";
import { Waypoint } from 'react-waypoint';
import jubeck_1 from '../images/portfolio/jubeck_1.png';
import jubeck_2 from '../images/portfolio/jubeck_2.png';
import styled from 'styled-components'


const JubeckWrapper = styled.div`
background-color: #EDF2F4;
width: 100%;
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-auto-rows: auto;
grid-template-areas: ${props => props.xs ? `
    ". img1 img1 img1 img1 img1 img1 img1 img1 img1 img1 ."
    ". img2 img2 img2 img2 img2 img2 img2 img2 img2 img2 ."` :
        props.sm || props.md ?
            `
    ". img1 img1 img1 img1 img1 img1 img1 img1 img1 . ."
    ". . img2 img2 img2 img2 img2 img2 img2 img2 img2 ."` :
            `
    ". . img1 img1 img1 img1 img1 img1 img1 .    . ."
    ". . .    img2 img2 img2 img2 img2 img2 img2 . ."`};
.jubeck_1 {
    grid-area: img1;
    padding: ${props => props.xs ? "7rem 0 5rem 0" : props.sm ? "10rem 0 8rem 0" : "14rem 0 12rem 0"};
    transition: ${props => props.transition};
    transform: ${props => props.img1 ? "translateY(0)" : "translateY(50px)"};
}
.jubeck_2 {
    grid-area: img2;
    padding-bottom: ${props => props.xs ? "7rem" : props.sm ? "10rem" : "14rem"};
    transition: ${props => props.transition};
    transform: ${props => props.img2 ? "translateY(0)" : "translateY(50px)"};
}
`;

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
    const trigger = (num) => {
        return num === 1 ? setImg1(true) : num === 2 ? setImg2(true) : null;
    }
    return (
        <JubeckWrapper className="JubeckExamples" {...props} img1={img1} img2={img2}>
            <Waypoint onEnter={trigger.bind(null, 1)}>
                <img src={jubeck_1} className="jubeck_1 example" alt="Jubeck Example 1" />
            </Waypoint>
            <Waypoint onEnter={trigger.bind(null, 2)}>
                <img src={jubeck_2} className="jubeck_2 example" alt="Jubeck Example 2" />
            </Waypoint>
        </JubeckWrapper>
    );
}

export default JubeckExamples;