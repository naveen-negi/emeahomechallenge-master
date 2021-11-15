import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import React from 'react';
import { booksType } from '../types';

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
      {/*TODO: This could be a perfomance issue*/}
      {Object.keys(books).map(bookIndex => {
        const book = books[bookIndex];

        return (
          <Card key={book.Title + book.Author} className={classes.root}>
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
              <Button size="small">Book in detail</Button>
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
