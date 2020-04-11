import React, {Fragment} from 'react';
import Nav from "../NavBar/NavBar";
import {Container} from "semantic-ui-react";

const WhatWeDoPage = () => {
    return (
        <Fragment>
            <Nav/>
            <Container className={'mainContainer'}>
                <h1>WHAT WE DO PAGE</h1>
            </Container>
        </Fragment>
    );
};

export default WhatWeDoPage;