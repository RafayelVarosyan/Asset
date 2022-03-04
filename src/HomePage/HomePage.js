import React from "react";
import Box from "../Components/Box/Box";
import Button from "../Components/Button/Button";
import Footer from "../Components/Footer/Footer";
import Logotip from "../Components/Logotip/Logotip";
import Nav from "../Components/Nav/Nav";
import Subtitle from "../Components/Subtitle/Subtitle";
import Text from "../Components/Text/Text";
import Wrapper from "../Components/Wrapper/Wrapper";
import "../HomePage/HomePage.css"

const HomePage = (props) => {
    return (
        <Wrapper>
            <Wrapper className="shortSection">
                <Box className="title">
                    <h1>
                        Your trusted partner <br />
                        business consultant.
                    </h1>
                    <Box>
                        <Button className="titleBtn red"> Ask a question </Button> 
                        <Button className="titleBtn white"> Our proposal </Button>
                    </Box>
                </Box>
                <Text className="text"> In the field of tax finance  </Text>
                <Logotip src="../../.././Images/Pictures/topimage.png" className="full"/> 
                <Box>
                    <Subtitle className="secondSt"> What can I do for you <br /> and your company? </Subtitle>
                </Box>
                <Box className="requirmentsBox">
                    <Box className="requirments">
                        <Box className="requirmentLine">
                            <Text>
                                <sup> 01 </sup>
                                We provide a full spectrum of <br /> traditional tax, accounting, <br /> and assurance services.
                            </Text>
                            <Text>
                                <sup> 02 </sup>
                                Business owners and managers <br /> choose Assets for our pragmatic, <br /> industry-focused insights.
                            </Text>
                        </Box>
                        <Box className="requirmentLine">
                            <Text>
                                <sup> 03 </sup>
                                Our mission is to help your <br /> organization become more <br /> successful.
                            </Text>
                            <Text>
                                <sup> 04 </sup>
                                We offer to complete <br /> spectrum of tax, assurance <br /> and advisory services.
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Wrapper>

            <Wrapper className="fullWrapper">
                <Wrapper className="shortSection">
                    <Subtitle className="secondSt"> How do we help? </Subtitle>
                    <Box className="helpers">
                        <Box>
                            <Box className="helper">
                                <Logotip src="./Images/Logos/money.svg" />
                                <Text> MONEY </Text>
                            </Box>
                            <Text>
                                Our mission, as an organization of professionals, is to understand <br /> the business of our clients, to help our clients identify their <br /> business and financial needs
                            </Text>
                            <Box className="helper">
                                <Logotip src="./Images/Logos/protection.svg" />
                                <Text> PROTECTION </Text>
                            </Box>
                            <Text>
                                As a firm, we are dedicated to maintaining and enhancing our <br /> trademark service. Foremost among these is the commitment of <br /> our partners and staff to look beyond the numbers and see the <br /> opportunity, challenges and solutions in every engagement. 
                            </Text>
                        </Box>
                        <Box>
                            <Box className="helper">
                                <Logotip src="./Images/Logos/statistic.svg" />
                                <Text> STABILITY </Text>
                            </Box>
                            <Text>
                                We provide the services that will help you achieve your business <br /> and personal financial goals.We are committed to providing the <br /> most efficient and expeditious services, while always maintaining <br /> the highest ethical standards.
                            </Text>
                            <Box className="helper">
                                <Logotip src="./Images/Logos/peoples.svg" />
                                <Text> PROFESSIONALISM </Text>
                            </Box>
                            <Text>
                                We insist on giving our clients individual attention, and achieve this <br /> by listening to our clients and communicating with them openly, <br /> promptly, frequently and effectively.
                            </Text>
                        </Box>
                    </Box>
                </Wrapper>
            </Wrapper>
            <Wrapper>
                <Logotip src="./Images/Pictures/secondimage.png" className="secondimage"/>
            </Wrapper>
            <Wrapper className="shortSection services">
                <Subtitle className="secondSt"> Our services </Subtitle>
                <Box className="sevicesLine">
                    <Box>
                        <Logotip src="./Images/Pictures/image3.png" />
                        <Text className="serviceName"> Accounting </Text>
                        <Text>
                            New Haven Biz interviewed Partner Jonathan <br /> Shoop for an article about the supply chain crisis <br /> in manufacturing.
                        </Text>
                    </Box>
                    <Box>
                        <Logotip src="./Images/Pictures/image4.png" />
                        <Text className="serviceName"> Tax Advice </Text>
                        <Text>
                            Surety Bond Quarterly published an article by <br /> Senior Tax Manager Zachary Hunter and Tax <br /> Manager Jeffrey McCarthy
                        </Text>
                    </Box>
                    <Box>
                        <Logotip src="./Images/Pictures/image5.png" />
                        <Text className="serviceName"> Systems Construction </Text>
                        <Text> 
                            Tax Stringer published an article by Partner Barry <br /> Halpern and Senior Manager Mark Leaheey, about <br /> tax credits and incentives to benefit growing <br /> businesses.
                        </Text>
                    </Box>
                </Box>
                <Box className="sevricesLinesecond">
                    <Box>
                        <Logotip src="./Images/Pictures/image6.png" />
                        <Text className="serviceName"> Internal accounting review </Text>
                        <Text>
                            Long Island Business News highlighted the <br /> results of the latest  CEO survey.
                        </Text>
                    </Box>
                    <Box>
                        <Logotip src="./Images/Pictures/image7.png" />
                        <Text className="serviceName"> Financial Advice </Text>
                        <Text>
                            F&B Leader Louis Biscotti lays out his predictions <br /> for the industry in 2022 and beyond in his <br /> December column for Forbes – and takes the <br /> measure of his pre-Covid forecast two years ago.
                        </Text>
                    </Box>
                </Box>
            </Wrapper>
            <Wrapper>
                <Logotip src="./Images/Pictures/thirdimage.png" className="secondimage" />
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
            <Wrapper className="shortSection">
                <Subtitle className="secondSt marginBanks"> We work with clients and <br /> always give good results </Subtitle>
                <Box className="banks">
                    <Box>
                        <Logotip src="./Images/Logos/bank1.svg" />
                    </Box>
                    <Box>
                        <Logotip src="./Images/Logos/bank2.svg" />
                    </Box>
                    <Box>
                        <Logotip src="./Images/Logos/bank3.svg" /> 
                    </Box>
                </Box>
                <Box className="banks">
                    <Box>
                        <Logotip src="./Images/Logos/bank4.svg" />
                    </Box>
                    <Box>
                        <Logotip src="./Images/Logos/bank5.svg" />
                    </Box>
                    <Box>
                        <Logotip src="./Images/Logos/bank6.svg" />
                    </Box>
                </Box>
            </Wrapper>
            <Wrapper className="shortSection">
                <Subtitle className="secondSt lastSubtitle"> “  Work with Assets was fully online which <br /> helped to save time. I'm really greatfull that <br /> we are working together now . ” </Subtitle>
                <Box className="working">
                    <Text className="lasttext"> Patrick Glenn </Text>
                    <Text className="lasttext transparent"> CEO Line agency </Text>
                </Box>
                <Box className="pages">
                    <Logotip src="./Images/Logos/prev.svg" />
                    <Text className="page"> 01/07 </Text>
                    <Logotip src="./Images/Logos/next.svg" /> 
                </Box>
            </Wrapper>
            <Footer className="firstTypeFooter" />
        </Wrapper>
    )
}

export default HomePage