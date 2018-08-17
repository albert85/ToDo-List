import React, { Component } from 'react';
import ListTodo from './ListTodo.js';
import '../App.css';

class AddTodo extends Component {

    constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    event.preventDefault();
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} 
                 onChange={this.onChange} 
                 placeholder="Add task" 
          />
          <button>Add New Task.</button>
        </form>
        <ListTodo items={this.state.items} />
      </div>
    );
  }
}
export default AddTodo;
