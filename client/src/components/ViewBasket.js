import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import BasketItem from "./BasketItem";

class ViewBasket extends Component {
  render() {
    const { items } = this.props;
    let content;

    content =
      items.length > 0 ? (
        items.map(item => <BasketItem item={item} key={item._id} />)
      ) : (
        <h2 className="mt-2">No items in basket</h2>
      );

    return <div>{content}</div>;
  }
}

ViewBasket.propTypes = {
  items: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  items: state.basket.items
});

export default connect(
  mapStateToProps,
  {}
)(ViewBasket);
