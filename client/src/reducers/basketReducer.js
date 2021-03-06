import { ADD_ITEM, REMOVE_ITEM, INCREASE_QTY } from "../actions/types";

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
        total:
          state.total + action.payload.file.metadata.price * action.payload.qty
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(
          item => item.file._id !== action.payload.file._id
        ),
        total:
          state.total - action.payload.file.metadata.price * action.payload.qty
      };
    case INCREASE_QTY:
      const newItems = state.items.map(
        item =>
          item.file._id !== action.payload.id
            ? item
            : { file: item.file, qty: item.qty + action.payload.qty }
      );

      return {
        ...state,
        items: newItems,
        total: state.total + action.payload.qty * action.payload.price
      };
    default:
      return state;
  }
}
