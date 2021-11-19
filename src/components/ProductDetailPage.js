import React from 'react';
import { bookType } from '../types';
import { useLocation } from 'react-router-dom';
import TableBody from 'react-router-dom';
import Table from '@material-ui/core';
import Grid from '@material-ui/core';
import Button from '@material-ui/core';
import TableCell from '@material-ui/core';
import TableRow from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../actions';

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
function ProductDetailPage() {
  const location = useLocation();
  const { book } = location.state;

  const classes = useStyles();

  const dispatch = useDispatch();

  function addProductToCart() {
    dispatch(addToCartAction(book));
  }

  return (
    <Grid item xs={8} className={classes.root}>
      <Table
        aria-label="product details"
        className={classes.productDetailTable}
      >
        <TableBody>
          <TableRow key={book.Title}>
            <TableCell component="th" scope="row">
              Title
            </TableCell>
            <TableCell align="left">{book.Title}</TableCell>
          </TableRow>
          <TableRow key={book.Height}>
            <TableCell component="th" scope="row">
              Height
            </TableCell>
            <TableCell align="left">{book.Height}</TableCell>
          </TableRow>
          <TableRow key={book.Author}>
            <TableCell component="th" scope="row">
              Author
            </TableCell>
            <TableCell align="left">{book.Author}</TableCell>
          </TableRow>
          <TableRow key={book.Genre}>
            <TableCell component="th" scope="row">
              Genre
            </TableCell>
            <TableCell align="left">{book.Genre}</TableCell>
          </TableRow>
          <TableRow key={book.Publisher}>
            <TableCell component="th" scope="row">
              Publisher
            </TableCell>
            <TableCell align="left">{book.Publisher}</TableCell>
          </TableRow>
          <TableRow key={book.SubGenre}>
            <TableCell component="th" scope="row">
              SubGenre
            </TableCell>
            <TableCell align="left">{book.SubGenre}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button
        variant="contained"
        className={classes.addToCartButton}
        color="primary"
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </Grid>
  );
}

ProductDetailPage.propTypes = {
  book: bookType,
};

export default ProductDetailPage;
