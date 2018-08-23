import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Main from "./components/main";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Main />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
