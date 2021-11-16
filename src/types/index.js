import { shape, arrayOf, string } from 'prop-types';

export const bookType = shape({
  Title: string,
  Genre: string,
  Publisher: string,
  SubGenre: string,
  Author: string,
  Height: string,
});

export const booksType = arrayOf(bookType);

export const CartType = shape({
  books: booksType,
});
