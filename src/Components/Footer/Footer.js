import React from "react";
import Box from "../Box/Box";
import Text from "../Text/Text";
import "../Footer/Footer.css"

const Footer = (props) => {
    return (
        <footer className={props.className} id={props.id}>
            <Box>
                <Text className="footerTitle"> Services </Text>
                <Text> Accounting </Text>
                <Text> Tax advice </Text>
                <Text> systems construction </Text>
                <Text> Internal accounting review </Text>
                <Text> financial advice </Text>
            </Box>
            <Box>
                <Text className="footerTitle"> Calculator </Text>
                <Text> Salary  </Text>
                <Text> loan  </Text>
                <Text> Annuity </Text>
                <Text> Property tax </Text>
            </Box>
            <Box>
                <Text className="footerTitle"> OUR COMPANY </Text>
                <Text> About Us </Text>
                <Text> Team </Text>
                <Text> Contact Us </Text>
                <Text> Privacy Policy </Text>
            </Box>
            <Box>
                <Text className="footerTitle"> LIBRARY </Text>
                <Text> IFRS </Text>
                <Text> ISA </Text>
                <Text> Public sector standards </Text>
                <Text> Chart of Accounts: </Text>
                <Text> Typical papers </Text>
            </Box>
            <Box>
                <Text className="footerTitle"> FOLLOW US </Text>
                <Text> FACEBOOK </Text>
                <Text> instagram </Text>
                <Text> linkedin </Text>
            </Box>
        </footer>
    )
}

export default Footer