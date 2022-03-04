import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import BecomePartner from "./BecomePartner/BecomePartner";
import Blog from "./Blog/Blog";
import Box from "./Components/Box/Box";
import BlogPage from "./BlogPage/BlogPage";
import Calculator from "./Calculator/Calculator";
import HomePage from "./HomePage/HomePage";
import JoinTeam from "./JoinTeam/JoinTeam";
import LibrarySecond from "./LibrarySecond/LibrarySecond";
import { Route, Routes, Link } from "react-router-dom";
import LibraryUi from "./LibraryUi/LibraryUi";
import LoanCalculator from "./LoanCalculator/LoanCalculator";
import ServicesUi from "./SevicesUi/ServicesUi";
import Team from "./Team/Team";
import List from "./Components/List/List";
import Items from "./Components/Items/Items";
import Logotip from "./Components/Logotip/Logotip";
import Text from "./Components/Text/Text";
import "./App.css";
import Wrapper from "./Components/Wrapper/Wrapper";


const App = () => {
  return (
      <Wrapper className="main">
        <Box className="navigate">
            <Link to="/"> <Logotip src="../../.././Images/Logos/homelogo.png" alt="logo"/> </Link> 
             <List className="navigation">
                 <Items> <Link to="/AboutUs"> About Us </Link> </Items>
                 <Items> <Link to="/ServicesUi"> Services </Link> </Items>
                 <Items> <Link to="/Calculator"> Calculator </Link> </Items>
                 <Items> <Link to="/LibraryUi"> Library </Link> </Items>
                 <Items> <Link to="/Team"> Team </Link> </Items>
                <Items>  Contact Us  </Items>
             </List>
             <Box className="tools">
                 <Box className="toolBox">
                     <Logotip src="../../.././Images/Logos/scale.png" />
                     <Text className="toolText"> Search </Text>
                 </Box>
                 <Box className="toolBox">
                     <Logotip src="../../.././Images/Logos/phone.png" />
                     <Text className="toolText"> Call </Text>
                 </Box>
             </Box>
             </Box>
             <Routes>
                 <Route path="/" element={<HomePage />} />
                 <Route path="/AboutUs" element={<AboutUs />} />
                 <Route path="/ServicesUi" element={<ServicesUi />} />
                 <Route path="/Calculator" element={<Calculator />} />
                 <Route path="/LibraryUi" element={<LibraryUi />} />
                 <Route path="/Team" element={<Team />} />
                <Route path="/JoinTeam" element={<JoinTeam />} />
                <Route path="/LoanCalculator" element={<LoanCalculator />} />
                <Route path="/Calculator" element={<Calculator />}/>
                <Route path="/Blog" element={<Blog />} />
                <Route path="/LibrarySecond" element={<LibrarySecond />} />
                <Route path="/BlogPage" element={<BlogPage />} />
                <Route path="/BecomePartner" element={<BecomePartner />} />
             </Routes>
         </Wrapper>
  )
}

export default App
