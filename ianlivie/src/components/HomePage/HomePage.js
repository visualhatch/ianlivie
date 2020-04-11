import React, {Fragment} from 'react';
import Nav from "../NavBar/NavBar"
import HomeJumbotron from "./Jumbotron/HomeJumbotron";


const HomePage = () => {
    return (
        <Fragment>
            <Nav/>
            <HomeJumbotron/>
        </Fragment>
    );
};

export default HomePage;