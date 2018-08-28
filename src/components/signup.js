import React from "react";
import { Link } from "react-router-dom";

const Signup = () => (
  <div className="container mt-6">
    <div className="row">
      <div className="col-md-6">
        <div className="card-header">
          <h4 className="text-center">Create Account</h4>
        </div>
        <div className="card-body">
          <fieldset>
            <div className="form-group has-error">
              <input
                className="form-control"
                placeholder="E-mail Address"
                name="email"
                type="text"
              />
            </div>
            <div className="form-group has-success">
              <input
                className="form-control"
                placeholder="Password"
                name="password"
                value=""
                type="password"
              />
            </div>
            <div className="form-group has-success">
              <input
                className="form-control"
                placeholder="Confirm Password"
                name="password"
                value=""
                type="password"
              />
            </div>
            <div className="form-group">
              <select className="form-control">
                <option selecterd="">Security Question</option>
              </select>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Security Answer"
                name="answer"
                value=""
                type="text"
              />
            </div>
            <input
              className="btn btn-primary btn-block mt-4"
              value="Sign Me Up"
              type="submit"
            />
          </fieldset>
        </div>
        <div className="card-footer">
          Already have an account?
          <Link to="/"> &nbsp; Sign In Here</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Signup;
