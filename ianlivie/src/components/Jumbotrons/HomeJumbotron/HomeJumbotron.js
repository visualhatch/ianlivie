import React from "react";
import {Button, Jumbotron} from "react-bootstrap";

import "./HomeJumbotron.css";

const HomeJumbotron = () => {
  return (
          <Jumbotron className={'homeJumbotron'}>
              <h1>Lighting, Video, Rigging</h1>
              <h3>Design and Rental Services</h3>
              <br />
              <p>
                  <Button href={"/test"} variant={"danger"}>
                      Learn More
                  </Button>
              </p>
          </Jumbotron>

  );
};

export default HomeJumbotron;
