import React from "react";
import "../BlogPageBox/BlogPageBox.css"

const BlogPageBox = (props) => {
    return (
        <div className="blogpagebox">
            <img src={props.src} />
            <div>
                <p className="bbfirst"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                <p> Malesuada imperdiet nibh lobortis quam enim neque ut eu. Vitae sit amet .... </p>
            </div>
        </div>
    )
}

export default BlogPageBox