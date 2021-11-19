import { fetchBooks } from '../api/books';

export const fetchAllBooks = () => async dispatch => {
  const books = await fetchBooks();
  console.log("api books 2: " + JSON.stringify(books));
  dispatch({ type: 'LOAD_ALL_BOOKS', payload: books.data });
};


export const addToCartAction = (book) => dispatch => {
  dispatch({ type: 'ADD_TO_CART', payload: book });
};


export const removefromCart = (book) => dispatch => {
  dispatch({ type: 'REMOVE_FROM_CART', payload: book });
};
