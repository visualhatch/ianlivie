import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
import { NavLink as RRNavLink } from "react-router-dom";

import './Footer.css'

const Footer = () => {
  return (
      <div className={'footerWrapper'}>
        <Row className={"footer"}>
          <Col className={"footer-col"}>
            <div>
              <div>
                <h5>Navigation</h5>
              </div>
              <div>
                <Nav.Link
                    as={RRNavLink}
                    exact
                    to={"/"}
                    activeClassName={"active"}
                >
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

                <Nav.Link
                    as={RRNavLink}
                    exact
                    to={"/news"}
                    activeClassName={"active"}
                >
                  News
                </Nav.Link>
                <Nav.Link
                    as={RRNavLink}
                    exact
                    to={"/equipment-rental"}
                    activeClassName={"active"}
                >
                  Equipment Rental
                </Nav.Link>

                <Nav.Link
                    as={RRNavLink}
                    exact
                    to={"/request-quote"}
                    activeClassName={"active"}
                >
                  Request Quote
                </Nav.Link>
                <Nav.Link
                    as={RRNavLink}
                    exact
                    to={"/contact-us"}
                    activeClassName={"active"}
                >
                  Contact Us
                </Nav.Link>
              </div>
            </div>
          </Col>
          <Col className={"footer-col"}>
            <div>
              <div>
                <h5>Contact Information</h5>
              </div>
              <div>
                <p>ianlivie.com</p>
                <p>1 Bridge Street,</p>
                <p>Stourbridge,</p>
                <p>West Midlands,</p>
                <p>DY8 5YX,</p>
                <p>United Kingdom.</p>
                <br />
                <p>T: +44 (0) 121 522 2266</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className={"footer"}>
          <Col className={"footer-terms"}>
            <div>
              <div className={"footer-inline"}>
                <Nav.Link
                    as={RRNavLink}
                    exact
                    to={"/terms-of-use"}
                    activeClassName={"active"}
                >
                  Terms of Use
                </Nav.Link>
                <Nav.Link
                    as={RRNavLink}
                    exact
                    to={"/privacy-statement"}
                    activeClassName={"active"}
                >
                  Privacy Statement
                </Nav.Link>
                <Nav.Link
                    as={RRNavLink}
                    exact
                    to={"/gdpr"}
                    activeClassName={"active"}
                >
                  GDPR
                </Nav.Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>


  );
};

export default Footer;
