import React from "react";
import Nav from "../Components/Nav/Nav";
import Wrapper from "../Components/Wrapper/Wrapper";
import "../Team/Team.css"
import Box from "../Components/Box/Box";
import Button from "../Components/Button/Button";
import Text from "../Components/Text/Text";
import TeamBox from "../Components/TeamBox/TeamBox";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";


const Team = (props) => {
    return (
        <Wrapper>
            
            <Wrapper className="shortSection">
                <Box className="title">
                    <h1> Meet Our Team <br /> <br /> </h1>
                    <Box>
                        <Button className="titleBtn red"> <Link to="/JoinTeam">  Join our Team! </Link>  </Button> 
                        <Button className="titleBtn white black"> <Link to="/BecomePartner"> Become a Partner </Link>  </Button>
                    </Box>
                </Box>
                <Text className="text"> best ones in our field  </Text>
            </Wrapper>
            <Box className="emptyBox">

            </Box>
            <Wrapper className="shortSection">
                <Text className="teamtext bbfirst"> Best ones in our field </Text>
                <Text className="teamtext">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, lectus a, tincidunt vitae dignissim mattis. Consectetur odio et dolor in diam. Adipiscing varius risus lorem diam quam mi. Auctor ut tristique pretium, egestas at. Neque dolor nulla sapien adipiscing blandit nibh.
                    Lectus faucibus lacus, purus eget magna gravida non. Tellus, tellus, egestas arcu lobortis mattis. Leo fames pharetra, euismod varius justo, feugiat sit. Sit consectetur est convallis ullamcorper cras facilisis est scelerisque pulvinar. Cursus egestas pulvinar ac sollicitudin vestibulum tellus purus. Purus feugiat a eget consectetur morbi dignissim nibh. Mauris at id eget orci sollicitudin quis vitae. Massa pretium vel gravida viverra tristique libero. Sed turpis egestas habitant diam elit in facilisis vitae. Nam vitae, sit turpis at nunc. Erat interdum urna, dui volutpat ipsum. Nisl nascetur dictum faucibus donec. Turpis luctus vitae donec libero, netus amet
                </Text>
            </Wrapper>
            <Wrapper className="fullwrapper">
                <Wrapper className="shortSection">
                    <Box className="teamrow">
                        <TeamBox 
                            imgclassname = "transparent"
                            src = "./Images/Pictures/teamimage.png"
                        />
                        <TeamBox 
                            imgclassname = "transparent"
                            src = "./Images/Pictures/teamimage.png"
                        />
                    </Box>
                    <Box className="teamrow">
                        <TeamBox 
                            src = "./Images/Pictures/teamimage.png"
                        />
                        <TeamBox 
                            imgclassname = "transparent"
                            src = "./Images/Pictures/teamimage.png"
                        />
                    </Box>
                </Wrapper>
            </Wrapper>
            <Footer className="secondTypeFooter" />
        </Wrapper>
    )
}

export default Team