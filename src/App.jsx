
import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import AddTodo from "./components/AddTodo";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar/>
        <div className="container">
        <div className="row">
          <div className="mt-6 col-4">
            <AddTodo/>
          </div>
          <div className="mt-4 col-8">
            <div className="task_list box-shadow rounded">
              <div class="inner rounded">
                <div className="text-white pl-4 tasklist">
                  <span>
                    <i class="fa fa-tasks" />
                  </span>
                  <div>
                  <h3>Tasks</h3>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Fragment>
    )
  }
}

export default App;
