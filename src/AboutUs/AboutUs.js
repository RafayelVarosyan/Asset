import React from "react";
import Nav from "../Components/Nav/Nav";
import Subtitle from "../Components/Subtitle/Subtitle";
import Wrapper from "../Components/Wrapper/Wrapper";
import "../AboutUs/AboutUs.css"
import Box from "../Components/Box/Box";
import Text from "../Components/Text/Text";
import Button from "../Components/Button/Button";
import Footer from "../Components/Footer/Footer";


const AboutUs = (props) => {
    return (
        <Wrapper>
            
            <Wrapper className="shortSection">
                <h1> About Assets <br /> Consulting Center </h1>
                <Box className="emptyBox"></Box>
                <Subtitle className="secondSt"> About becoming a <br /> partner.  </Subtitle>
                <Box className="aboutPartners">
                    <Box></Box>
                    <Box>
                        <Text className="partner">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lectus vel, ornare convallis proin porta tortor turpis. Curabitur eros, elementum, accumsan dui. Accumsan sed sodales scelerisque a. At in integer non ultrices vulputate. Senectus sagittis ornare ut eget. 
                            Cum cras mauris etiam pharetra. Morbi ante purus odio tellus neque id nam scelerisque fermentum. Sed justo, quisque malesuada dignissim urna eget aliquam eu. Tincidunt non orci accumsan eleifend augue mattis enim, non nisi. Sodales justo euismod dolor nibh amet quis ac, eget consectetur.
                            Neque turpis nisi risus felis gravida
                        </Text>
                        <Button className="partnerBtn"> Become a partner </Button>
                    </Box>
                </Box>
                <Box className="aboutPartners">
                    <Box>
                        <Text className="partner">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lectus vel, ornare convallis proin porta tortor turpis. Curabitur eros, elementum, accumsan dui. Accumsan sed sodales scelerisque a. At in integer non ultrices vulputate. Senectus sagittis ornare ut eget. 
                            Cum cras mauris etiam pharetra. Morbi ante purus odio tellus neque id nam scelerisque fermentum. Sed justo, quisque malesuada dignissim urna eget aliquam eu. Tincidunt non orci accumsan eleifend augue mattis enim, non nisi. Sodales justo euismod dolor nibh amet quis ac, eget consectetur.
                            Neque turpis nisi risus felis gravida
                        </Text>
                        <Button className="partnerBtn"> Feedback </Button>
                    </Box>
                    <Box></Box>
                </Box>
            </Wrapper>
            <Footer className="firstTypeFooter" />
        </Wrapper>
    )
}

export default AboutUs