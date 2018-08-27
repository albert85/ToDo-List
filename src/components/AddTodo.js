import React, { PureComponent } from 'react';
import '../App.css';

class AddTodo extends PureComponent {  

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input placeholder="Add task" />
          <button>Add New Task.</button>
        </form>
      </div>
    );
  }
}
export default AddTodo;
