import React from "react";

const ChildComponent = (props) => {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>Click</button>
        </div> 
    )
}

export default ChildComponent;