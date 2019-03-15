import React, { useState } from 'react';


const email = props => {
    const [hover, setHover] = useState(false);
    const styles = {
        email: {
            transition: "all 500ms",
            width: hover ? props.width + 5 : props.width,
        }
    }
    return (
        <a
            onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}
            href={"mailto:mail@rachelmiller.io"}
            target="_blank"
            rel="noopener noreferrer"
        >
            <svg style={styles.email} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path style={{ transition: "all 500ms" }} d="M36 0H4C1.8 0 0.02 1.96875 0.02 4.375L0 30.625C0 33.0313 1.8 35 4 35H36C38.2 35 40 33.0313 40 30.625V4.375C40 1.96875 38.2 0 36 0ZM36 8.75L20 19.6875L4 8.75V4.375L20 15.3125L36 4.375V8.75Z" fill={hover ? "#D3D8E0" : "#fff"} />
            </svg>
        </a>
    )
}

export default email;
