import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Main from "./components/main";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Main />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
