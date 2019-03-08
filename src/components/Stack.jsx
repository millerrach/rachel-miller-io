import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint';
import MyStack from '../images/myStack.jsx'

const skills = ['React', 'JS', 'HTML5', 'CSS3', 'Material UI', 'Sass', 'Figma', 'Sketch', 'Git'];

const Stack = () => {
    const [animate, setAnimate] = useState(false)
    const _trigger = () => { setAnimate(true) }
    const styles = {
        Stack: {
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateAreas: `"mStac mStac . . . skill skill skill skill skill skill ."`,
            padding: "2em 0",
            alignItems: "center",
            height: 600,
            position: "relative",
        },
        myStack: {
            gridArea: "mStac",
            position: "relative",
            right: 2,
        },
        skills: {
            gridArea: "skill",
            position: "relative",
            zIndex: 4,
        },
    }
    return (
        <Waypoint onEnter={_trigger}>
            <div className="Stack" style={styles.Stack}>
                <div style={styles.myStack}>
                    <MyStack />
                </div>
                <div id="skills" style={styles.skills}>
                    {skills.map((skill, i) => <div key={i}>{skill}</div>)}
                </div>
            </div >
        </Waypoint>
    )
}

export default Stack;
