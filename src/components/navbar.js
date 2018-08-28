import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-dark bg-dark">
    <Link to="/index" className="navbar-brand">
      &nbsp; TodoList
    </Link>
    <span className="navbar-brand mr-auto mt-2">
      <i className="fa fa-tasks" />
    </span>
    <div className="col-4">
      <form className="form-inline">
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
