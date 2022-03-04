import React from "react";
import "../BlogBox/BlogBox.css"
import { Link } from "react-router-dom";


const BlogBox = (props) => {
    return (
        <div className="blogbox">
            <img src={props.src} />
            <p className="bbfirst"> {props.firsttext} </p>
            <p> {props.secondtext} </p>
            <button> <Link to="/BlogPage"> Learn More </Link>   </button>
        </div>
    )
}

export default BlogBox