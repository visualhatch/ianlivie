import React from "react";
import Nav from "../../../Navigation/NavBar/NavBar";
import HeaderJumbotron from "../../../Jumbotrons/HeaderJumbotron/HeaderJumbotron";
import {Button, Col, Container, Image, Row} from "react-bootstrap";

import Footer from "../../../Navigation/Footer/Footer";

import "../NewsArticles.css";

const News2Page = () => {
  return (
    <Container fluid className={"mainContainer"}>
      <Nav />
      <HeaderJumbotron pageName={"News Article 2"} />
      <Container>
        <Row className={"newsArticleImagesRow"}>
          <Col xl={6} lg={6} md={8} sm={12}>
            <Image
              rounded
              src={
                "https://via.placeholder.com/300x250?text=NEWS+IMAGE+1+300+x+250"
              }
            />
          </Col>
          <Col>
            <Row>
              <Col>
                <Image
                  rounded
                  src={
                    "https://via.placeholder.com/100x100?text=NEWS+IMAGE+100+x+100"
                  }
                />
              </Col>
              <Col>
                <Image
                  rounded
                  src={
                    "https://via.placeholder.com/100x100?text=NEWS+IMAGE+100+x+100"
                  }
                />
              </Col>
              <Col>
                <Image
                  rounded
                  src={
                    "https://via.placeholder.com/100x100?text=NEWS+IMAGE+100+x+100"
                  }
                />
              </Col>
              <Col>
                <Image
                  rounded
                  src={
                    "https://via.placeholder.com/100x100?text=NEWS+IMAGE+100+x+100"
                  }
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Image
                  rounded
                  src={
                    "https://via.placeholder.com/100x100?text=NEWS+IMAGE+100+x+100"
                  }
                />
              </Col>
              <Col>
                <Image
                  rounded
                  src={
                    "https://via.placeholder.com/100x100?text=NEWS+IMAGE+100+x+100"
                  }
                />
              </Col>
              <Col>
                <Image
                  rounded
                  src={
                    "https://via.placeholder.com/100x100?text=NEWS+IMAGE+100+x+100"
                  }
                />
              </Col>
              <Col>
                <Image
                  rounded
                  src={
                    "https://via.placeholder.com/100x100?text=NEWS+IMAGE+100+x+100"
                  }
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className={"newsArticleHeaderRow"}>
          <Col>
            <h2>News Article 2</h2>
          </Col>
        </Row>

        <Row>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            adipisci alias aliquam animi assumenda consequuntur dicta distinctio
            eos, esse itaque magnam nemo nisi officiis pariatur porro possimus
            quisquam reiciendis sequi tempore temporibus? Deleniti facilis ipsa
            iure nulla, officiis tempore ut.
          </p>
        </Row>
        <Row>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            corporis dignissimos dolor, dolorem explicabo facere neque nobis,
            obcaecati quo saepe, sapiente sequi sint tempore! Ab, aliquam
            consequuntur distinctio dolor, eos illum iusto magnam nesciunt nisi
            omnis provident, tempora tempore voluptates?
          </p>
        </Row>
        <Row>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aliquid
            at, autem deserunt dolorem doloremque eius ex, incidunt libero nemo
            officia quam reiciendis sequi sit veniam. Adipisci alias debitis,
            dicta, eaque earum, eligendi eum inventore ipsam labore nulla
            veritatis voluptatibus. Corporis dolore doloribus dolorum, eaque
            exercitationem id magni nam numquam obcaecati odit perferendis quo,
            sunt. Expedita modi non rem sequi!
          </p>
        </Row>

        {/*GO BACK TO NEWS BUTTON*/}
        <Row className={"newsArticleButtonRow"}>
          <Col>
            <Button href={"/news"} variant={"danger"}>
              Back To News
            </Button>
          </Col>
        </Row>
      </Container>

      <Footer />
    </Container>
  );
};

export default News2Page;
