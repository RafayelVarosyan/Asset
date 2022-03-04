import React from "react";


const Subtitle = (props) => {
    return (
        <h2 className={props.className}>
            {props.children}
        </h2>
    )
}

export default Subtitle