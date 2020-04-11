import React from 'react';
import {Button, Jumbotron} from "react-bootstrap";

import './HomeJumbotron.css'

const HomeJumbotron = () => {
    return (
        <Jumbotron>
            <h1>Lighting, Video, Rigging</h1>
            <h3>Design and Rental Services</h3>
            <br/>
            <p>
                <Button color={'primary'}>Learn More</Button>
            </p>
        </Jumbotron>
    );
};

export default HomeJumbotron;