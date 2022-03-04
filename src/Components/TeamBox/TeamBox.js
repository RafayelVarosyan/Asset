import React from "react";
import "../TeamBox/TeamBox.css"

const TeamBox = (props) => {
    return (
        <div className="teambox">
            <img src={props.src} className={props.imgclassname} />
            <p className="bbfirst"> Name Surname </p>
            <p> Position </p>
        </div>
    )
}

export default TeamBox