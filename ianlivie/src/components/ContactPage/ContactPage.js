import React from 'react';
import Nav from "../Navigation/NavBar/NavBar";
import HeaderJumbotron from "../Jumbotrons/HeaderJumbotron/HeaderJumbotron";
import {Button, Container, Form} from "react-bootstrap";
import Footer from "../Navigation/Footer/Footer";

const ContactPage = () => {
    return (
        <Container fluid className={"mainContainer"}>
            <Nav />
            <HeaderJumbotron pageName={"Contact Us"} />
            <Container>
                <Form>
                    <Form.Group controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="subject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="comments">
                        <Form.Label>Comments</Form.Label>
                        <Form.Control as={"textarea"} rows={4} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>

            <Footer />
        </Container>
    );
};

export default ContactPage;