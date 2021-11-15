import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { bookType } from '../types';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

function ProductDetailPage({ book }) {
  const classes = useStyles();

  function openBookDetails() {
    console.log('books details opened');
  }

  return (
    <div className={classes.root}>
      <Card key={book.Title} className={classes.root}>
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
          <Button size="small" onClick={openBookDetails}>Book in detail</Button>
        </CardActions>
      </Card>{' '}
    </div>
  );
}

ProductDetailPage.propTypes = {
  book: bookType,
};

export default ProductDetailPage;
