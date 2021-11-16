import { fetchBooks } from '../api/books';

export const fetchAllBooks = () => async dispatch => {
  const books = await fetchBooks();
  dispatch({ type: 'LOAD_ALL_BOOKS', payload: books.data });
};


export const addToCartAction = (book) => dispatch => {
  dispatch({ type: 'ADD_TO_CART', payload: book });
};
