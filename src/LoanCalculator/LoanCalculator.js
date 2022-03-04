import React from "react";
import Box from "../Components/Box/Box";
import Items from "../Components/Items/Items";
import List from "../Components/List/List";
import Nav from "../Components/Nav/Nav";
import Wrapper from "../Components/Wrapper/Wrapper";
import Text from "../Components/Text/Text";
import Subtitle from "../Components/Subtitle/Subtitle";
import Button from "../Components/Button/Button";
import Footer from "../Components/Footer/Footer";
import "../LoanCalculator/LoanCalculator.css";
import Calculator from "../Calculator/Calculator";
import {  Link, Route, Routes } from "react-router-dom";

const LoanCalculator = (props) => {
    return (
        <Wrapper className="fullsection">
            <Wrapper className="shortSection">
                <Box className="emptyBox"></Box>
                <List className="calculatorNav">
                    <Items> <Link to="/Calculator"> Salary calculator </Link>  </Items>
                    <Items className="selected"> Loan calculator </Items>
                    <Items> Property tax calculator </Items>
                    <Items> Benefit calculator </Items>
                    <Items> Vacation fee calculator </Items>
                </List>
                <Box className="borderedBox">
                    <Text> Annuity </Text>
                    <Box className="blackBox"></Box>
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
            <Footer className="secondTypeFooter" />
        </Wrapper>
    )
}

export default LoanCalculator;