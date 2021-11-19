import React from 'react';
import { booksType, bookType } from '../types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core';
import TableRow from '@material-ui/core';
import Divider from '@material-ui/core';
import Table from '@material-ui/core';
import TableBody from '@material-ui/core';
import TableCell from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { removefromCart } from '../actions';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
  },
  cartHeader: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: 'left',
  },
  cartTable: {
    borderWidth: 'thin',
    borderColor: 'black',
    borderStyle: 'solid',
  },
  header: {
    fontWeight: 'bold',
  },
  checkOutButton: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    color: 'primary',
  },
  emptyCartPage: {
    marginTop: theme.spacing(2),
    width: '100%',
  },

  emptyCartHeader: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    textAlign: 'center',
  },
}));

function Cart() {
  const cart = useSelector(state => state.data.cart);
  const dispatch = useDispatch();
  const classes = useStyles();

  function removeCartItem(book) {
    dispatch(removefromCart(book));
  }
  if (cart.length > 0) {
    return (
      <div>
        <div className={classes.cartHeader}>
          <Typography variant="h4">Shopping Cart</Typography>
        </div>
        <Table className={classes.cartTable}>
          <TableBody>
            {cart.map(cartItem => (
              <TableRow
                key={
                  cartItem.book.Title +
                  cartItem.book.Author +
                  cartItem.book.Height
                }
              >
                <TableCell>
                  <Link
                    size="small"
                    to="/productDetails"
                    state={{ book: cartItem.book }}
                  >
                    {cartItem.book.Title}
                  </Link>
                </TableCell>
                <TableCell> Quantity: {cartItem.quantity}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    className={classes.checkOutButton}
                    onClick={() => removeCartItem(cartItem.book)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button
          variant="contained"
          color="primary"
          className={classes.checkOutButton}
        >
          Checkout
        </Button>
      </div>
    );
  } else {
    return (
      <div className={classes.emptyCart}>
        <Divider />
        <div className={classes.emptyCartHeader}>
          <Typography variant="h6">Your cart is empty</Typography>
        </div>
        <Divider />
      </div>
    );
  }
}

Cart.propTypes = {
  books: booksType,
  book: bookType,
};

export default Cart;
