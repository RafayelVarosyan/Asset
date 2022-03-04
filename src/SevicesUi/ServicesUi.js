import React from "react";
import Box from "../Components/Box/Box";
import Nav from "../Components/Nav/Nav";
import Subtitle from "../Components/Subtitle/Subtitle";
import Wrapper from "../Components/Wrapper/Wrapper";
import "../SevicesUi/ServicesUi.css"
import Logotip from "../Components/Logotip/Logotip";
import Text from "../Components/Text/Text";
import Button from "../Components/Button/Button";
import Footer from "../Components/Footer/Footer";

const ServicesUi = (props) => {
    return (
        <Wrapper>
            
            <Wrapper className="shortSection"> 
                <h1> About Assets <br /> Services </h1>
                <Box className="emptyBox"></Box>
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
            <Wrapper className="shortSection categoriesList">
                <Box className="categoriesBox">
                    <Box className="categories">
                        <Logotip src="./Images/Logos/library.svg" />
                        <Text> Library </Text>
                    </Box>
                    <Text>
                        The Accounting Library is dedicated to serving the educational and research needs of the students and faculty of the Leventhal School of Accounting by providing access to quality accounting and taxation resources, reference and research services, and classroom instruction.
                    </Text>
                </Box>
                <Box className="categoriesBox">
                    <Box className="categories">
                        <Logotip src="./Images/Logos/calculator.svg" />
                        <Text> Calculator </Text>
                    </Box>
                    <Text>
                        On this page you will find an introduction to accounting with supporting accounting calculators provided at appropriate discussion points in the introductory article. These Accounting Calculators are part of the suite of free online finance calculators designed and maintained by Assets.
                    </Text>
                </Box>
                <Box className="categoriesBox">
                    <Box className="categories">
                        <Logotip src="./Images/Logos/blog.svg" />
                        <Text> Blog </Text>
                    </Box>
                    <Text>
                        Assets blog is one of the most famous accounting news, trade magazine, and informative blog on the Internet. It is one of the best resources for public accountants and professionals who offer tax preparation, bookkeeping, and financial services to individuals, small businesses, and SMBs.
                    </Text>
                </Box>
            </Wrapper>
            <Footer className="firstTypeFooter" />
        </Wrapper>
    )
}

export default ServicesUi