import React from "react";
import BlogBox from "../Components/BlogBox/BlogBox";
import Box from "../Components/Box/Box";
import Button from "../Components/Button/Button";
import Nav from "../Components/Nav/Nav";
import Text from "../Components/Text/Text";
import Wrapper from "../Components/Wrapper/Wrapper";
import "../Blog/Blog.css"
import Subtitle from "../Components/Subtitle/Subtitle";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";

const Blog = (props) => {
    return (
        <Wrapper>
            
            <Box className="emptyBox"></Box>
            <Wrapper className="shortSection">
                <Box className="bbbox">
                    <BlogBox 
                        src = "./Images/Pictures/whiteimage.png"
                        firsttext = "Shon Wilsper about trends"
                        secondtext = "consectetur adipiscing elit. Malesuada imperdiet nibh lobortis quam enim neque ut eu. Vitae sit amet ...."
                    />
                    <BlogBox 
                        src = "./Images/Pictures/whiteimage.png"
                        firsttext = "Interview with..."
                        secondtext = "consectetur adipiscing elit. Malesuada imperdiet nibh lobortis quam enim neque ut eu. Vitae sit amet ...."
                    />
                    <BlogBox 
                        src = "./Images/Pictures/bbfirst.png"
                        firsttext = "Dilan West "
                        secondtext = "consectetur adipiscing elit. Malesuada imperdiet nibh lobortis quam enim neque ut eu. Vitae sit amet ...."
                    />
                </Box>
                <Box className="bbbox">
                    <BlogBox 
                        src = "./Images/Pictures/whiteimage.png"
                        firsttext = "Financial information about economic"
                        secondtext = "consectetur adipiscing elit. Malesuada imperdiet nibh lobortis quam enim neque ut eu. Vitae sit amet ...."
                    />
                    <BlogBox 
                        src = "./Images/Pictures/whiteimage.png"
                        firsttext = "Terminology"
                        secondtext = "consectetur adipiscing elit. Malesuada imperdiet nibh lobortis quam enim neque ut eu. Vitae sit amet ...."
                    />
                    <BlogBox 
                        src = "./Images/Pictures/bbsecond.png"
                        firsttext = "Research"
                        secondtext = "consectetur adipiscing elit. Malesuada imperdiet nibh lobortis quam enim neque ut eu. Vitae sit amet ...."
                    />
                </Box>
            </Wrapper>
            <Text className="seemore"> See more  </Text>
            <Wrapper className="shortSection">
                    <Subtitle className="wdwo"> Follow us here </Subtitle>
                    <Text className="wdwoText">
                        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Rhoncus libero viverra et <br /> placerat lectus.  
                    </Text>
                    <Box className="wdwoBtns">
                        <Button className="titleBtn red"> Subscribe </Button>
                        <Button className="titleBtn white"> Send Email  </Button>
                    </Box>
                </Wrapper>
                <Footer className="secondTypeFooter" />
        </Wrapper>
    )
}

export default Blog
