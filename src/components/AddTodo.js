import React, { PureComponent } from "react";
import "../App.css";

class AddTodo extends PureComponent {
  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control rounded"
              placeholder="Add Task"
            />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">
                Add Task
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default AddTodo;
