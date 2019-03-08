import React, { useState } from 'react';


const email = props => {
    const [state, toggle] = useState(true);
    return (
        <div onMouseEnter={() => toggle(!state)} onMouseLeave={() => toggle(!state)}>
            <svg width={props.width} height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.3333 0.666672H3.66667C1.83334 0.666672 0.350003 2.16667 0.350003 4L0.333336 24C0.333336 25.8333 1.83334 27.3333 3.66667 27.3333H30.3333C32.1667 27.3333 33.6667 25.8333 33.6667 24V4C33.6667 2.16667 32.1667 0.666672 30.3333 0.666672ZM30.3333 7.33334L17 15.6667L3.66667 7.33334V4L17 12.3333L30.3333 4V7.33334Z" fill="white" />
            </svg>
        </div>
    )
}

export default email;
