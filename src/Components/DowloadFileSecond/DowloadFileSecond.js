import React from "react";
import "../DowloadFileSecond/DowloadFileSecond.css"

const DowloadFileSecond = (props) => {
    return (
        <div className="dowloadfilesecond">
            <img className="adobelogo" src="./Images/Logos/adobelogo.svg" />
            <div className="dowloadfilesecondbox">
                <p> {props.text} </p>
                <div className="secondtools">
                    <img src="./Images/Logos/downloadsecond.svg" />
                    <span> 21 </span>
                    <img src="./Images/Logos/sharelogo.svg" />
                </div>
            </div>
        </div>
    )
}

export default DowloadFileSecond