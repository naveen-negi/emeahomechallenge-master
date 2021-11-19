import React from 'react';
import { booksType, bookType } from '../types';
import { Link } from 'react-router-dom';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { removefromCart } from '../actions';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

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
  const cart = withPropsValidation(useSelector(state => state.data.cart));
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
                <TableCell>
                  <label>Quantity: {cartItem.quantity}</label>
                </TableCell>
                <TableCell>
                  <Button
                    role="button"
                    aria-label="remove"
                    data-testid="checkout-btn"
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
      <div data-testid="empty-cart" className={classes.emptyCart}>
        <Divider />
        <div className={classes.emptyCartHeader}>
          <Typography variant="h6">Your cart is empty</Typography>
        </div>
        <Divider />
      </div>
    );
  }
}

const withPropsValidation = props => {
  PropTypes.checkPropTypes(propTypes, props, 'prop', 'ProductDetailPage');
  return props;
};

const propTypes = {
  books: booksType,
  book: bookType,
};

export default Cart;
