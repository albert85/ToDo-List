import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./components/router";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/jquery/dist/jquery";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
