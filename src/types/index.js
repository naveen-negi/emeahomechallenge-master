import PropTypes, { shape, arrayOf } from 'prop-types';

export const bookType = shape({
  Title: PropTypes.string,
  Author: PropTypes.string,
});

export const booksType = arrayOf(bookType);
