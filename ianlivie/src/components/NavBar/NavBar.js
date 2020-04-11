import React, { Fragment } from "react";


import { NavLink as RRNavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Fragment>
      <Navbar expand="lg" sticky={'top'}>
        <Navbar.Brand href="/">
          <img
            src="/assets/logo/logo_white.jpg"
            width="150"
            className="d-inline-block align-top"
            alt="Ian Livie logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"><i className="fas fa-bars navTogglerIcon"></i></Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={RRNavLink} exact to={"/"} activeClassName={"active"}>
              Home
            </Nav.Link>

            <Nav.Link
              as={RRNavLink}
              exact
              to={"/about"}
              activeClassName={"active"}
            >
              About
            </Nav.Link>

            <Nav.Link as={RRNavLink} exact to={"/news"} activeClassName={"active"}>News</Nav.Link>
            <Nav.Link as={RRNavLink} exact to={"/equipment-rental"} activeClassName={"active"}>Equipment Rental</Nav.Link>
            <Nav.Link as={RRNavLink} exact to={"/markets"} activeClassName={"active"}>Markets</Nav.Link>
            <Nav.Link as={RRNavLink} exact to={"/contact-us"} activeClassName={"active"}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
