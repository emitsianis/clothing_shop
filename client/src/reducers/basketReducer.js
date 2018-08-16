import { ADD_ITEM, REMOVE_ITEM } from "../actions/types";

const initialState = {
  items: [],
  total: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.metadata.price
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload._id),
        total: state.total - action.payload.metadata.price
      };
    default:
      return state;
  }
}
