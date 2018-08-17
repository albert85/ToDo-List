import React from 'react';

const ListTodo = props => (
  <ul>
    {
      props.items.map((item, index) => <li key={index}>{item} </li>)
    }
  </ul>
);

export default ListTodo;
