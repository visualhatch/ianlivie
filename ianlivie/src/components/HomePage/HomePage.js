import React from 'react';
import Nav from "../Navigation/NavBar/NavBar"
import HomeJumbotron from "../Jumbotrons/HomeJumbotron/HomeJumbotron";
import Welcome from "./Welcome/Welcome";
import {Container} from "react-bootstrap";
import Footer from "../Navigation/Footer/Footer";


const HomePage = () => {
    return (
        <Container fluid className={'mainContainer'}>
            <Nav/>
            <HomeJumbotron/>
            <Welcome/>
            <Footer/>
        </Container>
    );
};

export default HomePage;