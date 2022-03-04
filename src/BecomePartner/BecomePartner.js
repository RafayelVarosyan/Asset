import React from "react";
import Box from "../Components/Box/Box";
import Logotip from "../Components/Logotip/Logotip";
import Nav from "../Components/Nav/Nav";
import Text from "../Components/Text/Text";
import Wrapper from "../Components/Wrapper/Wrapper";
import "../JoinTeam/JoinTeam.css"
import Button from "../Components/Button/Button";
import Footer from "../Components/Footer/Footer";

const BecomePartner = (props) => {
    return (
        <Wrapper>
           
            <Wrapper className="shortSection">
                <Box className="jointeamrow">
                    <Box>
                        <h1> Join our Team! </h1>
                        <Text className="jointext">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci duis cursus sed suspendisse cras tincidunt donec posuere. Aenean sed vivamus cum non tellus nunc amet, facilisis non. Nisl gravida aliquet at dolor, eu tortor aenean non. Fames ut nulla malesuada adipiscing gravida velit aenean. Eget potenti mauris venenatis euismod semper egestas. Etiam imperdiet non et pretium ac lacus mattis vitae. Dictumst duis eget lectus vitae quis dui curabitur.
                            Mattis id nisl elit est sed tellus mauris. Enim, nibh sit at id erat porta orci dui. Pharetra, ac risus parturient pellentesque varius.
                        </Text>
                        <Box className="entersend">
                            <input className="entercv" type="text" placeholder="Name Surname "/>
                            <input className="entercv telselect" type="tel" placeholder="Phone number" />
                            <Button className="sent"> Sent </Button>
                        </Box>
                    </Box>
                    <Logotip src="./Images/Pictures/jointeamimage.png" />
                </Box>
            </Wrapper>
            <Footer className="secondTypeFooter" />
        </Wrapper>
    )
}

export default BecomePartner