import { shape, arrayOf, string, number } from 'prop-types';

export const bookType = shape({
  Title: string.isRequired,
  Genre: string.isRequired,
  Publisher: string.isRequired,
  SubGenre: string.isRequired,
  Author: string.isRequired,
  Height: string.isRequired,
});

export const booksType = arrayOf(bookType);

export const CartType = shape({
  books: booksType,
});


export const cartItemType = {
  id: number.isRequired,
  name: string.isRequired,
  price: number.isRequired,
  img: string.isRequired,
  count: number.isRequired,
  stockCount: number.isRequired,
};


