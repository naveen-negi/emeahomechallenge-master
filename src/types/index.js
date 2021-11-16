import { shape, arrayOf, string } from 'prop-types';

export const bookType = shape({
  Title: string,
  Author: string,
  Height: string,
});

export const booksType = arrayOf(bookType);
