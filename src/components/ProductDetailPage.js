import React from 'react';
import { bookType } from '../types';
import { useLocation } from 'react-router-dom';
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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

  return (
    <Grid item xs={8}>
      <Table aria-label="product details" className={classes.productDetailTable}>
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
