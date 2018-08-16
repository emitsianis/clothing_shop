import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import BasketItem from "./BasketItem";

class ViewBasket extends Component {
  render() {
    const { items, total } = this.props;
    let content;

    content =
      items.length > 0 ? (
        items.map(item => <BasketItem item={item} key={item._id} />)
      ) : (
        <h2 className="mt-2">No items in basket</h2>
      );

    return (
      <div className="mb-2">
        <div>{content}</div>
        <div className="col-md-6 bg-light text-dark basket-total">
          <h4 className="basket-total-price">Total price: {total}$</h4>

          <button className="btn btn-success basket-total-checkoutbtn">
            Continue to Checkout <i className="fas fa-arrow-circle-right" />
          </button>
        </div>
      </div>
    );
  }
}

ViewBasket.propTypes = {
  items: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  items: state.basket.items,
  total: state.basket.total
});

export default connect(
  mapStateToProps,
  {}
)(ViewBasket);
