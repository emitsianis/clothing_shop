import React, { Component } from "react";
import MainItems from "./MainItems";

class Main extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 mt-4">
          <div className="heading bg-light text-dark">
            <h2>Check out our newest arivals</h2>
          </div>
          <MainItems />
        </div>
      </div>
    );
  }
}

export default Main;
