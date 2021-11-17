import React, { useEffect } from 'react';
import { booksType, bookType } from '../types';
import { useLocation } from 'react-router-dom';
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction, fetchAllBooks } from '../actions';
import ProductDetailPage from './ProductDetailPage';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
  },
  productDetailTable: {
    borderWidth: 'thin',
    borderColor: 'black',
    borderStyle: 'solid',
  },
  addToCartButton: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    color: 'primary',
  },
}));

function Cart() {
  const cart = useSelector(state => state.data.cart);

  return (
    <div>
      {cart.map(book => (
        <ListItem key={book.Title + book.Author + book.Height}>
          <ListItemText>{book.Title}</ListItemText>
        </ListItem>
      ))}
    </div>
  );
}

Cart.propTypes = {
  books: booksType,
  book: bookType,
};

export default Cart;
