import React, { useState } from 'react';


const email = props => {
    const [hover, setHover] = useState(false);
    const styles = {
        email: {
            position: "absolute",
            transition: "all 500ms",
            width: hover ? props.width + 5 : props.width,
        }
    }
    return (
        <div onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}>
            <a
                href={"mailto:mail@rachelmiller.io"}
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg style={styles.email} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path style={{ transition: "all 500ms" }} d="M30.3333 0.666672H3.66667C1.83334 0.666672 0.350003 2.16667 0.350003 4L0.333336 24C0.333336 25.8333 1.83334 27.3333 3.66667 27.3333H30.3333C32.1667 27.3333 33.6667 25.8333 33.6667 24V4C33.6667 2.16667 32.1667 0.666672 30.3333 0.666672ZM30.3333 7.33334L17 15.6667L3.66667 7.33334V4L17 12.3333L30.3333 4V7.33334Z" fill={hover ? "#D3D8E0" : "#fff"} />
                </svg>
            </a>
        </div>
    )
}

export default email;
