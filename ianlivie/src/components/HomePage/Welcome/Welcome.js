import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import './Welcome.css'

const Welcome = () => {
    return (
        <Container>
            <Row>
                <Col className={'welcomeColumn'}><h1 className={'welcome-title'}>Welcome to ianlivie.com</h1></Col>
            </Row>
            <br/>
            <Row>
                <Col lg={'6'} md={'12'} sm={'12'}><p className={'welcomeLeft'}>As one of the longest established event technical service companies in the UK, we are recognised as experts in hire, sales and installation of professional lighting, video and equipment.</p></Col>
                <Col lg={'6'} md={'12'} sm={'12'}>
                    <p>Here at ianlivie.com we are committed to excellence in the supply of design, technology, crew and production services to all areas of the professional entertainment industry.</p>
                    <p>Known for its energy and enthusiasm, ianlivie.com is fully focused on providing the latest innovations and most appropriate products, services and solutions … delivered by people who really make the industry rock!</p>
                    <p>Whether it’s a stadium, arena tour or the purchase of a single lamp, with the support of equipment from leading manufacturers we offer the highest level of service and support throughout the UK and Europe.</p>
                </Col>
            </Row>

        </Container>
    );
};

export default Welcome;