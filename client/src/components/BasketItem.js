import React, { Component } from "react";
import PropTypes from "prop-types";

class BasketItem extends Component {
  render() {
    const { item } = this.props;
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
          <button className="btn btn-danger">
            Remove from Basket <i class="fas fa-cart-arrow-down" />
          </button>
        </div>
      </div>
    );
  }
}

BasketItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default BasketItem;
