import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-dark bg-dark">
    <span className="navbar-brand">
      <i className="fa fa-tasks" />
    </span>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/index">
          TodoList
        </Link>
      </li>
    </ul>
    <div className="col-4">
      <form className="form-inline my-2, my-md-0">
        <input
          className="form-control rounded"
          type="text"
          placeholder="Search for task"
        />
      </form>
    </div>
  </nav>
);

export default Navbar;
