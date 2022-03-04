import React from "react";
import "../Calculator/Calculator.css"
import Box from "../Components/Box/Box";
import Items from "../Components/Items/Items";
import List from "../Components/List/List";
import Nav from "../Components/Nav/Nav";
import Wrapper from "../Components/Wrapper/Wrapper";
import Text from "../Components/Text/Text";
import Subtitle from "../Components/Subtitle/Subtitle";
import Button from "../Components/Button/Button";
import Footer from "../Components/Footer/Footer";
import LoanCalculator from "../LoanCalculator/LoanCalculator";
import { Route,Routes,Link } from "react-router-dom";


const Calculator = (props) => {
    return (
        <Wrapper>
           
            <Wrapper className="shortSection">
                <Box className="emptyBox"></Box>
                <List className="calculatorNav">
                    <Items className="selected"> Salary calculator </Items>
                    <Items> <Link to="/LoanCalculator"> Loan calculator </Link>  </Items>
                    <Items> Property tax calculator </Items>
                    <Items> Benefit calculator </Items>
                    <Items> Vacation fee calculator </Items>
                </List>
                <Box className="bordered">
                    <Text> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, non egestas sed commodo turpis nunc pellentesque augue a. Lacus et, curabitur mattis morbi sed id. Pellentesque dolor venenatis porttitor at adipiscing a. Nec cras libero aliquet euismod eu venenatis.
                        Consequat adipiscing justo sed ante massa. Vestibulum euismod malesuada nullam elementum diam neque, parturient. Porttitor viverra turpis et semper convallis semper sagittis, ut. Interdum sed nunc feugiat dui vel at. 
                    </Text>
                    <Text> Choose the type of salary </Text>
                    <Box></Box>
                </Box>
                <Subtitle className="wdwo"> What do we offer </Subtitle>
                <Text className="wdwoText">
                    We offer a high degree of specialization. In addition to <br /> domestic and international tax planning and preparation, <br /> the Firm’s professional services include mergers and <br /> acquisition planning, family office services, forensic <br /> accounting, business valuation and litigation support. 
                </Text>
                <Box className="wdwoBtns">
                    <Button className="titleBtn red"> Ask a question </Button>
                    <Button className="titleBtn white"> Our proposal </Button>
                </Box>
            </Wrapper>
            <Footer className="secondTypeFooter" id="fullfooter" />
            
        </Wrapper>
    )
}

export default Calculator