import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4">Clothing Shop Template</h1>
                  <p className="lead"> Add a logo or something here</p>
                  <hr />
                  <Link to="/main" className="btn btn-lg btn-light">
                    Continue!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
