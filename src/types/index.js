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
export const cartItem = shape({
  book: bookType,
  quantity: number,
});

export const cartItemsType = arrayOf(cartItem);

export const CartType = shape({
  cartItems: cartItemsType,
});
