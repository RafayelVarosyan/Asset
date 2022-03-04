import React from "react";


const Items = (props) => {
    return (
        <li className={props.className}>
            {props.children}
        </li>
    )
}

export default Items