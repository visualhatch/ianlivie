import React, {Fragment} from 'react';
import Nav from "../NavBar/NavBar";
import {Container} from "semantic-ui-react";

const AboutPage = () => {
    return (
        <Fragment>
            <Nav/>
            <Container className={'mainContainer'}>
                <h1>ABOUT PAGE</h1>
            </Container>
        </Fragment>
    );
};

export default AboutPage;