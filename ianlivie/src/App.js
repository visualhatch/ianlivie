import React from "react";
import { Route,  withRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage"

import {Container} from "react-bootstrap";
import NewsPage from "./components/NewsPage/NewsPage";

const App = () => {
  return (
    <Container fluid className={'appContainer'}>
      <Route exact path={"/"} component={HomePage} />
      <Route exact path={"/about"} component={AboutPage} />


      <Route exact path={"/news"} component={NewsPage} />
      {/*<Route exact path={"/equipment-rental"} component={EquipmentRentalPage} />*/}
      {/*<Route exact path={"/markets"} component={MarketsPage} />*/}
      <Route exact path={"/contact-us"} component={ContactPage} />

    </Container>
  );
};

export default withRouter(App);
