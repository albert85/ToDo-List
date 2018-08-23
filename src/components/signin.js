import React from "react";
import { Link } from "react-router-dom";

const Signin = () => (
  <div className="container mt-6">
    <div className="row">
      <div className="col-sm-6 col-md-4">
        <div className="card">
          <div className="card-header">
            <strong> Sign in to continue</strong>
          </div>
          <div className="card-body">
            <form role="form" action="#" method="POST">
              <div className="row">
                <div className="col-sm-12 col-md-10">
                  <div className="input-group mt-4 mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-user" />
                      </span>
                    </div>
                    <input
                      className="form-control"
                      placeholder="Username"
                      name="loginname"
                      type="text"
                      autofocus
                    />
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i class="fa fa-lock" />
                      </span>
                    </div>
                    <input
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      type="password"
                      value=""
                    />
                  </div>
                  <div>
                    <input
                      type="submit"
                      className="btn btn-lg btn-primary btn-block mt-4 mb-4"
                      value="Sign in"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="card-footer">
            Don't have an account!
            <Link to="/signup"> &nbsp; Sign Up Here</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Signin;
