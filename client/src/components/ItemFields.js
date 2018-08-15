import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addItem } from "../actions/basketActions";

class ItemFields extends Component {
  onAddItemClick(file) {
    this.props.addItem(file);
  }

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
            <div>
              <h4>
                {file.metadata.brand} {file.metadata.name}
              </h4>
            </div>
          ) : null}
          <hr />
          {file.metadata !== undefined ? (
            <div>
              <h4>Available sizes : {file.metadata.sizes}</h4>
            </div>
          ) : null}
          <hr />
          {file.metadata !== undefined ? (
            <div>
              <h4>
                Price : {file.metadata.price}
                {"$"}
              </h4>
            </div>
          ) : null}
          <hr />
          <button
            onClick={this.onAddItemClick.bind(this, file)}
            className="btn btn-warning"
          >
            Add to Basket <i className="fas fa-cart-plus" />
          </button>
        </div>
      </div>
    );
  }
}

ItemFields.propTypes = {
  file: PropTypes.object.isRequired,
  addItem: PropTypes.func.isRequired
};

export default connect(
  null,
  { addItem }
)(ItemFields);
