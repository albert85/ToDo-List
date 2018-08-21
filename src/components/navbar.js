import React from "react";
const Navbar = () => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="/">
      TodoList
    </a>
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
