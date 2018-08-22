import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class MainItem extends Component {
  render() {
    const source = `/image/${this.props.file.filename}`;
    const destination = `/displayitem/${this.props.file.filename}`;
    const item = this.props.file;

    return (
      <div className="main-item-display bg-light text-dark">
        <div className="item-display-image">
          {item.filename !== undefined ? (
            <Link to={destination}>
              <img className="basket-image" src={source} alt="main item" />
            </Link>
          ) : null}
        </div>

        <div className="item-display-info">
          {item.metadata !== undefined ? (
            <div>
              <h4>
                {item.metadata.brand} {item.metadata.name}
              </h4>
            </div>
          ) : null}
          <hr />
          {item.metadata !== undefined ? (
            <div>
              <h4>
                Price : {item.metadata.price}
                {"$"}
              </h4>
            </div>
          ) : null}
          <hr />
        </div>
      </div>
    );
  }
}

MainItem.propTypes = {
  file: PropTypes.object.isRequired
};

export default MainItem;
