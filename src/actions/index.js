import { fetchBooks } from '../api/books';

export const fetchAllBooks = () => async dispatch => {
  const books = await fetchBooks();
  dispatch({ type: 'LOAD_ALL_BOOKS', payload: books.data });
};
