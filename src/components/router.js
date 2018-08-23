import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Signin from "./signin";
import Navbar from "./navbar";
import Signup from "./signup";

const Router = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={Signin} exact />
        <Route path="/signup" component={Signup} />
        <Route path="/index" component={App} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
