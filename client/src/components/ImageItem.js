import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ImageItem extends Component {
  render() {
    const source = `image/${this.props.file.filename}`;

    return (
      <div className="img-font">
        <Link to="/allitems">
          <img className="item-img" alt="item" src={source} />
        </Link>
        <h3>
          {this.props.file.metadata.brand} {this.props.file.metadata.name}
        </h3>
      </div>
    );
  }
}

ImageItem.propTypes = {
  file: PropTypes.object.isRequired
};

export default ImageItem;
