import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";

import "./NewsCard.css";

const NewsCard = ({ imageURL, description, date, link }) => {
  return (
    <Row className={"newsRow"}>
      <Col>
        <Image rounded src={imageURL} />
      </Col>
      <Col>
        <Row><h2 className={'newsDate'}>{date}</h2></Row>
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
