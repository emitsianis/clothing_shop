import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addItem } from "../actions/basketActions";

class ItemFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: "1"
    };
  }

  onChange(e) {
    this.setState({ qty: e.target.value });
  }

  onAddItemClick(file, qty) {
    const newItem = {
      file: file,
      qty: qty
    };

    this.props.addItem(newItem);
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
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Quantity
              </span>
            </div>
            <input
              value={this.state.qty}
              onChange={this.onChange.bind(this)}
              type="text"
              className="form-control"
              placeholder="Enter the desired quantity (1, 2, 3,...)"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <hr />
          <button
            onClick={this.onAddItemClick.bind(this, file, this.state.qty)}
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
