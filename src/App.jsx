import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import AddTodo from "./components/AddTodo";
class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="mt-6 col-4">
              <AddTodo />
            </div>
            <div className="mt-4 col-8">
              <div className="task_list box-shadow rounded">
                <div className="inner rounded">
                  <div className="text-white tasklist">
                    <span>
                      <i className="fa fa-tasks pl-4 pt-2" />
                    </span>
                    &nbsp;
                    <span className="pt-2 h4">
                      <strong>Tasks</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
