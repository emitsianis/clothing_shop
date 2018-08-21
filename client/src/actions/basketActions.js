import { ADD_ITEM, REMOVE_ITEM, INCREASE_QTY } from "./types";

export const addItem = item => dispatch => {
  dispatch({
    type: ADD_ITEM,
    payload: item
  });
};

export const removeItem = item => dispatch => {
  dispatch({
    type: REMOVE_ITEM,
    payload: item
  });
};

export const increaseQty = item => dispatch => {
  dispatch({
    type: INCREASE_QTY,
    payload: item
  });
};
