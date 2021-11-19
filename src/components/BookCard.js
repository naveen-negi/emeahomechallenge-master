import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import React from 'react';
import { booksType } from '../types';
import { Link } from 'react-router-dom';
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

function BookCard(props) {
  const classes = cardStyles();
  const { books } = props;

  return (
    <>
      {Object.keys(books).map(bookIndex => {
        const book = books[bookIndex];

        return (
          <Card data-testid="book-summary"
            key={book.Title + book.Author + book.Height}
            className={classes.root}
          >
            <CardContent>
              <Typography variant="h5" component="h2">
                {book.Title}
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {book.Author}
              </Typography>
            </CardContent>
            <CardActions>
              <Link
                size="small"
                to= '/productDetails'
                state = {{book: book}}
              >
                Book in detail
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}

BookCard.propTypes = {
  books: booksType,
};

export default BookCard;
