import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";

import "./NewsCard.css";

const NewsCard = ({ imageURL, description, title, date, link }) => {
  return (
    <Row className={"newsRow"}>
      <Col xl={6} lg={6} md={8} sm={12}>
        <Image rounded src={imageURL} />
      </Col>
      <Col xl={6} lg={6} md={8} sm={12}>
        <Row><h2 className={'newsDate'}>{date}</h2></Row>
        <Row><h6 className={'newsTitle'}>{title}</h6></Row>
        <Row><p className={'newsDescription'}>{description}</p></Row>
        <Row>
          <Button href={link} variant={"danger"}>
            Read More
          </Button>
        </Row>
      </Col>
    </Row>
  );
};

export default NewsCard;
