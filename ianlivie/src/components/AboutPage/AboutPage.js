import React from 'react';
import Nav from "../Navigation/NavBar/NavBar";
import Footer from "../Navigation/Footer/Footer";
import {Col, Container, Image, Row} from "react-bootstrap";
import HeaderJumbotron from "../Jumbotrons/HeaderJumbotron/HeaderJumbotron";

import './AboutPage.css'

const AboutPage = () => {
    return (
        <Container fluid className={'mainContainer'}>
            <Nav/>
            <HeaderJumbotron pageName={'About'}/>
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <Col md={2} className={'aboutImageColumn'}>
                                <Image src="https://via.placeholder.com/110" roundedCircle />
                            </Col>
                            <Col>
                                <p>
                                    Ian Livie started his career in the early 80's when he left school and head hunted
                                    a job with Roger Squire disco centres.  At the time Roger Squire disco centres was the
                                    largest UK DJ/Club national superstore selling the latest range of lighting for the
                                    entertainment industry.  Looking back this was a very lucky start in an industry that started
                                    with a very basic level of technology, then evolved over the tears at a rapid rate.
                                </p>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <p>
                                    In 1991 Ian Livie made the move to soley rent concert lighting.  He invested into his first
                                    Lycian followspots.  From here he naturally evolved at a modest pace re-investing into new
                                    products and continuning this throughout the years.
                                </p>
                                <p>
                                    In 2003 Ian Livie met Dave Evans who has worked with Ian as a very valuable asset in the structure
                                    of Ian's business and continues as second in command designing, prepping and running small to large
                                    scale shows.
                                </p>
                                <p>
                                    In 2004 ianlivie.com moved into a professional premises and this is now the key to the orgnisation
                                    of many successful world class shows at an international level.
                                </p>
                                <p>
                                    We will continue in an industry moving at a high risk pace.
                                </p>
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </Container>

            <Footer/>
        </Container>
    );
};

export default AboutPage;