import React from "react";
import "../DowloadFile/DowloadFile.css"

const DowloadFile = (props) => {
    return (
        <div className="dowloadfile">
            <img src="./Images/Logos/adobelogo.svg" />
            <p> {props.text} </p>
            <div>
                <img src="./Images/Logos/dowloadlogo.svg" />
                <span> {props.count} </span>
                <img src="./Images/Logos/sharelogo.svg" />
            </div>
        </div>
    )
}

export default DowloadFile