import { ADD_ITEM, REMOVE_ITEM } from "./types";

export const addItem = item => dispatch => {
  dispatch({
    type: ADD_ITEM,
    payload: item
  });
};

export const removeItem = id => dispatch => {
  dispatch({
    type: REMOVE_ITEM,
    payload: id
  });
};
