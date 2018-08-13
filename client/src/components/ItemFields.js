import React, { Component } from "react";
import PropTypes from "prop-types";

class ItemFields extends Component {
  render() {
    const { file } = this.props;
    const source = `/image/${file.filename}`;

    return (
      <div className="col-md-12 item-display bg-light text-dark">
        <div className="item-display-image">
          {file.filename !== undefined ? <img src={source} alt="" /> : null}
        </div>
        <div className="item-display-info">
          {file.metadata !== undefined ? (
            <p>
              <h4>
                {file.metadata.brand} {file.metadata.name}
              </h4>
            </p>
          ) : null}
          <hr />
          {file.metadata !== undefined ? (
            <p>
              <h4>Available sizes : {file.metadata.sizes}</h4>
            </p>
          ) : null}
        </div>
      </div>
    );
  }
}

ItemFields.propTypes = {
  file: PropTypes.object.isRequired
};

export default ItemFields;
