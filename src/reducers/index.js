import { combineReducers } from 'redux';
import produce from 'immer';

const bookShopReducer = produce((draft = { books: [], cart: [] }, action) => {
  switch (action.type) {
    case 'LOAD_ALL_BOOKS':
      return { ...draft, books: action.payload };
    case 'ADD_TO_CART': {
      const duplicateCartItem = draft.cart.find(
        cartItem => cartItem.book.Title === action.payload.Title
      );
      if (duplicateCartItem) {
        draft.cart = draft.cart.filter(
          cartItem => cartItem != duplicateCartItem
        );
        duplicateCartItem.quantity = duplicateCartItem.quantity + 1;
        draft.cart.push(duplicateCartItem);
      } else {
        draft.cart.push({ book: action.payload, quantity: 1 });
      }
      return draft;
    }
    case 'REMOVE_FROM_CART': {
      const itemToRemove = draft.cart.find(
        cartItem => cartItem.book.Title === action.payload.Title
      );
      draft.cart = draft.cart.filter(
        cartItem => cartItem.book.Title != action.payload.Title
      );
      if (itemToRemove.quantity > 1) {
        itemToRemove.quantity = itemToRemove.quantity - 1;
        draft.cart.push(itemToRemove);
        draft.cart.sort((item1, item2) =>
          item1.book.Title.localeCompare(item2.book.Title)
        );
      }
      return draft;
    }
    default:
      return draft;
  }
});

export default combineReducers({ data: bookShopReducer });
