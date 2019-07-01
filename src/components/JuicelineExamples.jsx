import React, { useState, useEffect } from "react";
import { Waypoint } from 'react-waypoint';
import juicelineDesktop from '../images/portfolio/juicelineDesktop.png';
import juicelineMobile from '../images/portfolio/juicelineMobile.png';
import juicelineList from '../images/portfolio/juicelineList.png';
import styled from 'styled-components';


const JuicelineWrapper = styled.div`
.juicelineExample {
    background-color: #F7F7F7;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas: ${props => props.xs ? `
    ". img1 img1 img1 img1 img1 img1 img1 img1 img1 img1 ."
    ". .    img2 img2 img2 img2 img2 img2 img2 img2 .    ."
    ". .    img3 img3 img3 img3 img3 img3 img3 img3 .    ."` :
        props.sm || props.md ?
            `
    ". img1 img1 img1 img1 img1 img1 img1 img1 img1 img1 ."
    ". img2 img2 img2 img2 .    .    img3 img3 img3 img3 ."` : props.lg || props.xl ?
                `
    ". . img1 img1 img1 img1 img1 img1 img1 img1 . ."
    ". . img2 img2 img2 .    .    img3 img3 img3 . ."` :
                `
    ". . . img1 img1 img1 img1 img1 img1 . . ."
    ". . . img2 img2 .    .    img3 img3 . . ."`};
.juicelineDesktop {
    grid-area: img1;
    padding: ${props => props.xs ? "7rem 0 5rem 0" : props.sm ? "10rem 0 8rem 0" : "14rem 0 12rem 0"};
    transition: ${props => props.transition};
    transform: ${props => props.img1 ? "translateY(0)" : "translateY(50px)"};
}
.juicelineMobile {
    grid-area: img2;
    transition: ${props => props.transition};
    transform: ${props => props.img2 ? "translateY(0)" : "translateY(50px)"};
}
.juicelineList {
    grid-area: img3;
    position: relative;
    padding: ${props => props.xs ? "5rem 0 7rem 0" : props.sm ? "8rem 0 10rem 0" : "12rem 0 14rem 0"};
    transition: ${props => props.transition};
    transform: ${props => props.img3 ? "translateY(0)" : "translateY(50px)"};
}`;

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
    const trigger = (num) => {
        return num === 1 ? setImg1(true) : num === 2 ? setImg2(true) : num === 3 ? setImg3(true) : setImg2(true) + setImg3(true);
    }
    return (
        <JuicelineWrapper className="JuicelineExamples" {...props} img1={img1} img2={img2} img3={img3}>
            <Waypoint onEnter={trigger.bind(null, 1)}>
                <div className="juicelineExample">
                    <img src={juicelineDesktop} className="juicelineDesktop example" alt="Juiceline Example 1" />
                </div>
            </Waypoint>
            {xs ?
                <div>
                    <Waypoint onEnter={trigger.bind(null, 2)}>
                        <div className="juicelineExample">
                            <img src={juicelineMobile} className="juicelineMobile example" alt="Juiceline Example 2" />
                        </div>
                    </Waypoint>
                    <Waypoint onEnter={trigger.bind(null, 3)}>
                        <div className="juicelineExample">
                            <img src={juicelineList} className="juicelineList example" alt="Juiceline Example 3" />
                        </div>
                    </Waypoint>
                </div>
                :
                <Waypoint onEnter={trigger}>
                    <div className="juicelineExample">
                        <img src={juicelineMobile} className="juicelineMobile example" alt="Juiceline Example 2" />
                        <img src={juicelineList} className="juicelineList example" alt="Juiceline Example 3" />
                    </div>
                </Waypoint>}
        </JuicelineWrapper>
    );
}

export default JuicelineExamples;