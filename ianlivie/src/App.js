import React, { Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage"
import WhatWeDoPage from "./components/WhatWeDo/WhatWeDoPage";

const App = () => {
  return (
    <Fragment>
      <Route exact path={"/"} component={HomePage} />
      <Route exact path={"/about"} component={AboutPage} />
      <Route exact path={"/what-we-do"} component={WhatWeDoPage} />
      <Route exact path={"/contact"} component={ContactPage} />
  
    </Fragment>
  );
};

export default withRouter(App);
