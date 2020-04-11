import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage"

const App = () => {
  return (
    <Fragment>
      <Route exact path={"/"} component={HomePage} />
      <Route exact path={"/about"} component={AboutPage} />
      <Route exact path={"/contact"} component={ContactPage} />
  
    </Fragment>
  );
};

export default withRouter(App);
