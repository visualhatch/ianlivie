import React from "react";
import Nav from "../Navigation/NavBar/NavBar";
import HeaderJumbotron from "../Jumbotrons/HeaderJumbotron/HeaderJumbotron";
import { Col, Container, Image, Row } from "react-bootstrap";
import Footer from "../Navigation/Footer/Footer";

const EquipmentRentalPage = () => {
  return (
    <Container fluid className={"mainContainer"}>
      <Nav />
      <HeaderJumbotron pageName={"Equipment Rental"} />
      <Container>
        <Row>
          <Col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi
              aspernatur debitis delectus, illum inventore iste iusto laboriosam
              magnam maiores minima numquam officia officiis, perferendis quas
              quasi quis ratione reiciendis sed sint soluta sunt temporibus unde
              ut veritatis voluptatem voluptates.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus dignissimos esse facilis minima ratione vitae
              voluptates? Aut dolore ea eligendi fugiat hic itaque maiores
              maxime nemo quae? Necessitatibus, officiis, pariatur!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis, sapiente, sint! Aperiam dicta dolor eveniet explicabo
              fugiat inventore ipsum iste nemo nihil nulla officia quasi
              quisquam, rerum sequi, temporibus tenetur.
            </p>
          </Col>
            <Col>
                <Image src="https://via.placeholder.com/600x300" rounded />
            </Col>
        </Row>
      </Container>

      <Footer />
    </Container>
  );
};

export default EquipmentRentalPage;
