import React from 'react';
import { bookType } from '../types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';

const cardStyles = makeStyles({
  root: {
    minWidth: '50%',
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function ProductDetailPage() {
  const location = useLocation();
  const { book } = location.state;
  console.log('book: ' + JSON.stringify(location.state));
  const classes = cardStyles();

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
    </TableContainer>
  );
}

ProductDetailPage.propTypes = {
  book: bookType,
};

export default ProductDetailPage;
