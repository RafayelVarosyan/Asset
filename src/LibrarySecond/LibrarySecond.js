import React from "react";
import Wrapper from "../Components/Wrapper/Wrapper";
import Nav from "../Components/Nav/Nav";
import List from "../Components/List/List";
import Items from "../Components/Items/Items";
import Box from "../Components/Box/Box";
import Logotip from "../Components/Logotip/Logotip";
import DowloadFileSecond from "../Components/DowloadFileSecond/DowloadFileSecond";
import "../LibrarySecond/LibrarySecond.css"
import Text from "../Components/Text/Text";
import Subtitle from "../Components/Subtitle/Subtitle";
import Button from "../Components/Button/Button";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";


const LibrarySecond = (props) => {
    return (
        <Wrapper className="fullsection">
            
            <Wrapper className="shortSection">
                <List className="libraryNav">
                    <Items className="selected"> International Financial <br /> Reporting Standards </Items>
                    <Items> International auditing <br /> standards </Items>
                    <Items> Public sector <br /> standards </Items>
                    <Items> Chart of Accounts: </Items>
                    <Items> Typical papers </Items>
                    <Items> <Link to="/Blog"> Blog </Link> </Items>
                </List>
            </Wrapper>
            <Wrapper className="shortSection">
                <Box className="filters">
                   <Link to="/LibraryUi"> <Logotip src="./Images/Logos/secondtypefilter.svg" /> </Link> 
                    <Logotip src="./Images/Logos/azfilter.svg" />
                </Box>
                <Box className="dowloadsecondline">
                    <DowloadFileSecond 
                        text = "PH Conceptual Basics (2018)"
                    />
                    <DowloadFileSecond 
                        text = "PH Conceptual Basics (2018)"
                    />
                </Box>
                <Box className="dowloadsecondline">
                    <DowloadFileSecond 
                        text = "PH Conceptual Basics (2018)"
                    />
                    <DowloadFileSecond 
                        text = "PH Conceptual Basics (2018)"
                    />
                </Box>
                <Box className="dowloadsecondline">
                    <DowloadFileSecond 
                        text = "PH Conceptual Basics (2018)"
                    />
                    <DowloadFileSecond 
                        text = "PH Conceptual Basics (2018)"
                    />
                </Box>
                <Box className="dowloadsecondline">
                    <DowloadFileSecond 
                        text = "PH Conceptual Basics (2018)"
                    />
                    <DowloadFileSecond 
                        text = "PH Conceptual Basics (2018)"
                    />
                </Box>
                <Box className="dowloadsecondline">
                    <DowloadFileSecond 
                        text = "PH Conceptual Basics (2018)"
                    />
                    <DowloadFileSecond 
                        text = "PH Conceptual Basics (2018)"
                    />
                </Box>
                <Text className="seemore"> See more </Text>
            </Wrapper>
            <Wrapper className="shortSection">
                <Subtitle className="wdwo"> What do we offer </Subtitle>
                <Text className="wdwoText">
                    We offer a high degree of specialization. In addition to <br /> domestic and international tax planning and preparation, <br /> the Firm’s professional services include mergers and <br /> acquisition planning, family office services, forensic <br /> accounting, business valuation and litigation support. 
                </Text>
                <Box className="wdwoBtns">
                    <Button className="titleBtn red"> Ask a question </Button>
                    <Button className="titleBtn white"> Our proposal </Button>
                </Box>
            </Wrapper>
            <Footer className="secondTypeFooter" />
        </Wrapper>
    )
}

export default LibrarySecond