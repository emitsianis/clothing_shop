import { ADD_ITEM, REMOVE_ITEM } from "./types";

export const addItem = item => dispatch => {
  dispatch({
    type: ADD_ITEM,
    payload: item
  });
};
