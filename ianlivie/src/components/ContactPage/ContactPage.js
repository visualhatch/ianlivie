import React, { Fragment } from "react";
import Nav from "../NavBar/NavBar";
import { Container } from "semantic-ui-react";

const ContactPage = () => {
  return (
    <Fragment>
      <Nav />
      <Container className={"mainContainer"}>
        <h1>CONTACT PAGE</h1>
      </Container>
    </Fragment>
  );
};

export default ContactPage;
