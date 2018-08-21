import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeItem } from "../actions/basketActions";

class BasketItem extends Component {
  onRemoveClick(item, qty) {
    const remItem = {
      file: item,
      qty: qty
    };

    this.props.removeItem(remItem);
  }

  render() {
    const { item, qty } = this.props;
    const source = `/image/${item.filename}`;

    return (
      <div className="col-md-6 item-display bg-light text-dark">
        <div className="item-display-image">
          {item.filename !== undefined ? (
            <img className="basket-image" src={source} alt="basket item" />
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
          {qty !== undefined ? (
            <div>
              <h4>Quantity : {qty}</h4>
            </div>
          ) : null}
          <hr />
          <button
            onClick={this.onRemoveClick.bind(this, item, qty)}
            className="btn btn-danger"
          >
            Remove from Basket <i className="fas fa-cart-arrow-down" />
          </button>
        </div>
      </div>
    );
  }
}

BasketItem.propTypes = {
  item: PropTypes.object.isRequired,
  qty: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired
};

export default connect(
  null,
  { removeItem }
)(BasketItem);
