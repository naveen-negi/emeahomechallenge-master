import { combineReducers } from 'redux';
import produce from 'immer';

const questionReducer = produce((draft = { books: [], cart: [] }, action) => {
  switch (action.type) {
    case 'LOAD_ALL_BOOKS':
      return { ...draft, books: action.payload };
    case 'ADD_TO_CART':
      draft.cart.push(action.payload);
      return draft;
  }
  return draft;
});

export default combineReducers({ data: questionReducer });
