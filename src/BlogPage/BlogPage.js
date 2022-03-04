import React from "react";
import Box from "../Components/Box/Box";
import Logotip from "../Components/Logotip/Logotip";
import Nav from "../Components/Nav/Nav";
import Text from "../Components/Text/Text";
import Wrapper from "../Components/Wrapper/Wrapper";
import "../BlogPage/BlogPage.css"
import BlogPageBox from "../Components/BlogPageBox/BlogPageBox";
import Subtitle from "../Components/Subtitle/Subtitle";
import Button from "../Components/Button/Button";
import Footer from "../Components/Footer/Footer";


const BlogPage = (props) => {
    return (
        <Wrapper>
           
            <Wrapper className="shortSection">
                <h1> Shon Wilsper about trends </h1>
                <Box className="bpfirst">
                    <Logotip src="./Images/Pictures/blogpagefirst.png" />
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien mauris suspendisse faucibus ultricies at pellentesque nunc, in congue. Lorem nunc, dolor velit mollis suscipit consequat et posuere vitae. In venenatis vestibulum, in consectetur. 
                        Maecenas bibendum ac ut odio feugiat pellentesque augue. Sociis bibendum nunc, vitae, imperdiet odio arcu orci eu. Dui commodo et risus mauris at aenean. Eu mattis et integer viverra mollis facilisi. Eget sit a, et urna purus in enim nullam sit. Ullamcorper neque venenatis arcu ornare nulla.
                        Orci in a pellentesque viverra tincidunt tristique. Aenean urna, felis proin tempor, erat. Feugiat nisi elementum convallis quis pellentesque consequat. Varius erat risus risus volutpat ac sed amet nunc nunc.
                    </Text>
                </Box>
                <Box className="bbprow">
                    <Box className="bbpcol">
                        <BlogPageBox 
                            src = "./Images/Pictures/whiteimage.png"
                        />
                        <BlogPageBox 
                            src = "./Images/Pictures/whiteimage.png"
                        />
                        <BlogPageBox 
                            src = "./Images/Pictures/whiteimage.png"
                        />
                    </Box>
                    <Box className="bbpcol">
                        <BlogPageBox 
                            src = "./Images/Pictures/bbfirst.png"
                        />
                        <BlogPageBox 
                            src = "./Images/Pictures/whiteimage.png"
                        />
                        <BlogPageBox 
                            src = "./Images/Pictures/whiteimage.png"
                        />
                    </Box>
                </Box>
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
            </Wrapper>
            <Footer className="secondTypeFooter" />
        </Wrapper>
    )
}

export default BlogPage