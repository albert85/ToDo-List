import React from "react";
const Main = () => (
  <div className="container">
    <div className="row">
      <div className="mt-6 col-sm-6">
        <form className="form-inline my-2, my-md-0">
          <input className="form-control rounded box-shadow" type="text" />
        </form>
      </div>
      <div className="mt-4 col-sm-6">
        <div className="task_list box-shadow rounded">
          <div class="inner rounded">
            <div className="text-white pl-4">
              <span>
                <i class="fa fa-tasks" />
              </span>
              <h3>Tasks</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Main;
