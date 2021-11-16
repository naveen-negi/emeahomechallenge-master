import React from 'react';
import { bookType } from '../types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import {Link, useLocation} from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";

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
  console.log("book: " +  JSON.stringify(location.state));
  const classes = cardStyles();
  return (
    <Card key={book.Title + book.Author + book.Height}>
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
        <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
        >
          {book.Height}
        </Typography>
      </CardContent>
      <CardActions>
        <Link size="small" to="/productDetails" book={book}>
          Book in detail
        </Link>
      </CardActions>
    </Card>
  );
}

ProductDetailPage.propTypes = {
  book: bookType,
};

export default ProductDetailPage;
