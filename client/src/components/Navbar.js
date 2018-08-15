import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: ""
    };
  }

  onChange(e) {
    this.setState({ tag: e.target.value });
  }

  onSubmitClick(e) {
    e.preventDefault();
    window.location.href = `/tagitems/${this.state.tag}`;
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/main">
          ClothingShop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/tagitems/all">
                All Items
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tagitems/men">
                Men's Clothing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tagitems/women">
                Women's Clothing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-warning" to="/basket">
                View Basket <i className="fas fa-shopping-cart" />
              </Link>
            </li>
          </ul>
          <form
            className="form-inline my-2 my-lg-0"
            onSubmit={this.onSubmitClick.bind(this)}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={this.state.tag}
              onChange={this.onChange.bind(this)}
            />
            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
