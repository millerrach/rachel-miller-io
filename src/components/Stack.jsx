import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useTransition, animated } from 'react-spring';
import MyStack from '../images/myStack.jsx'

const Stack = () => {
    useEffect(() => void reset(), [])
    const ref = useRef([])
    const [items, set] = useState([])
    const transitions = useTransition(items, null, {
        from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#397F99' },
        enter: [
            { opacity: 1, height: 50, innerHeight: 50 },
        ],
        leave: [{ color: '#397F99' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
        update: { color: '#479A7B' },
    })
    const reset = useCallback(() => {
        ref.current.map(clearTimeout)
        ref.current = []
        set([])
        ref.current.push(setTimeout(() => set(['React', 'JS', 'HTML5', 'CSS3', 'Material UI', 'Sass', 'Figma', 'Sketch', 'Git']), 1000))
        ref.current.push(setTimeout(() => set(['React', 'JS']), 3000))
        ref.current.push(setTimeout(() => set(['React', 'JS', 'HTML5', 'CSS3', 'Material UI', 'Sass', 'Figma', 'Git']), 5000))
    }, [])

    useEffect(() => void reset(), [])
    //End Stack Animation
    const styles = {
        Stack: {
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateAreas: `"mStac mStac . . . skill skill skill skill skill skill ."`,
            padding: "2em 0",
            alignItems: "center",
        },
        myStack: {
            gridArea: "mStac",
            position: "relative",
            right: 2,
        },
        skills: {
            gridArea: "skill",
        },
    }
    return (
        <div className="Stack" style={styles.Stack}>
            <div style={styles.myStack}>
                <MyStack />
            </div>
            <div id="skills" style={styles.skills}>
                {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
                    <animated.div className="transitions-item" key={key} style={rest}>
                        <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
                    </animated.div>
                ))
                }
            </div>
        </div >
    )
}

export default Stack;
