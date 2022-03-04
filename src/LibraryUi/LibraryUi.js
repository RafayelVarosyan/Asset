import React from "react";
import Box from "../Components/Box/Box";
import Button from "../Components/Button/Button";
import DowloadFile from "../Components/DowloadFile/DowloadFile";
import Footer from "../Components/Footer/Footer";
import Items from "../Components/Items/Items";
import List from "../Components/List/List";
import Logotip from "../Components/Logotip/Logotip";
import Nav from "../Components/Nav/Nav";
import Subtitle from "../Components/Subtitle/Subtitle";
import Text from "../Components/Text/Text";
import Wrapper from "../Components/Wrapper/Wrapper";
import { Link } from "react-router-dom";
import "../LibraryUi/LibraryUi.css"

const LibraryUi = (props) => {
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
                   <Link to="/LibrarySecond"> <Logotip src="./Images/Logos/filtertypes.svg" /> </Link> 
                    <Logotip src="./Images/Logos/azfilter.svg" />
                </Box>
                <Box>
                    <Box className="dowloads">
                        <DowloadFile 
                            text = "PH Conceptual Basics (2018)"
                            count = "51"
                        />
                        <DowloadFile 
                            text = "IAS 28 Investments in Associates and Joint Ventures"
                            count = "03"
                        />
                        <DowloadFile 
                            text = "The first adoption of IFRS 1 International Financial ..."
                            count = "12"
                        />
                        <DowloadFile 
                            text = "IFRIC 6 Liabilities arising from participation in ..."
                            count = "42"
                        />
                    </Box>
                    <Box className="dowloads">
                        <DowloadFile 
                            text = "PH Conceptual Basics (2018)"
                            count = "51"
                        />
                        <DowloadFile 
                            text = "IAS 28 Investments in Associates and Joint Ventures"
                            count = "03"
                        />
                        <DowloadFile 
                            text = "The first adoption of IFRS 1 International Financial ..."
                            count = "12"
                        />
                        <DowloadFile 
                            text = "IFRIC 6 Liabilities arising from participation in ..."
                            count = "42"
                        />
                    </Box>
                    <Box className="dowloads">
                        <DowloadFile 
                            text = "PH Conceptual Basics (2018)"
                            count = "51"
                        />
                        <DowloadFile 
                            text = "IAS 28 Investments in Associates and Joint Ventures"
                            count = "03"
                        />
                        <DowloadFile 
                            text = "The first adoption of IFRS 1 International Financial ..."
                            count = "12"
                        />
                        <DowloadFile 
                            text = "IFRIC 6 Liabilities arising from participation in ..."
                            count = "42"
                        />
                    </Box>
                    <Box className="dowloads">
                        <DowloadFile 
                            text = "PH Conceptual Basics (2018)"
                            count = "51"
                        />
                        <DowloadFile 
                            text = "IAS 28 Investments in Associates and Joint Ventures"
                            count = "03"
                        />
                        <DowloadFile 
                            text = "The first adoption of IFRS 1 International Financial ..."
                            count = "12"
                        />
                        <DowloadFile 
                            text = "IFRIC 6 Liabilities arising from participation in ..."
                            count = "42"
                        />
                    </Box>
                </Box>
                <Text className="seemore"> See more </Text>
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
            </Wrapper>
            <Footer className="secondTypeFooter" />
        </Wrapper>
    )
}

export default LibraryUi