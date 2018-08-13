import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Main from "./components/Main";
import TagedItems from "./components/TagedItems";
import DisplayItem from "./components/DisplayItem";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/main" component={Main} />
            <Route exact path="/tagitems/:tag" component={TagedItems} />
            <Route exact path="/displayitem/:name" component={DisplayItem} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
