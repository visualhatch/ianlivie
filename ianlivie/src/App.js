import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch, withRouter } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Route exact path={"/"} component={HomePage2} />
    </Fragment>
  );
};

export default withRouter(App);
