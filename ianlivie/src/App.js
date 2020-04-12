import React from "react";
import { Route,  withRouter } from "react-router-dom";
import {Container} from "react-bootstrap";

import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage"
import NewsPage from "./components/NewsPage/NewsPage";
import EquipmentRentalPage from "./components/EquipmentRentalPage/EquipmentRentalPage";

// NEWS ARTICLE IMPORTS
import News1Page from "./components/NewsPage/NewsArticles/News1/News1Page";
import News2Page from "./components/NewsPage/NewsArticles/News2/News2Page";
import News3Page from "./components/NewsPage/NewsArticles/News3/News3Page";


const App = () => {
  return (
    <Container fluid className={'appContainer'}>
      <Route exact path={"/"} component={HomePage} />
      <Route exact path={"/about"} component={AboutPage} />


      <Route exact path={"/news"} component={NewsPage} />
      <Route exact path={"/equipment-rental"} component={EquipmentRentalPage} />
      {/*<Route exact path={"/markets"} component={MarketsPage} />*/}
      <Route exact path={"/contact-us"} component={ContactPage} />


      {/*NEWS ARTICLE ROUTES*/}
        <Route exact path={"/news/news-article/news1"} component={News1Page} />
        <Route exact path={"/news/news-article/news2"} component={News2Page} />
        <Route exact path={"/news/news-article/news3"} component={News3Page} />


    </Container>
  );
};

export default withRouter(App);
