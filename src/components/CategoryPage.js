import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BookCard from './BookCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks } from '../actions';
import { booksType, bookType } from '../types';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function CategoryPage() {
  const classes = useStyles();
  const { books } = withPropsValidation(useSelector(state => state.data));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <BookCard books={books} />
      </main>
    </div>
  );
}
const withPropsValidation = props => {
  PropTypes.checkPropTypes(propTypes, props, 'prop', 'CategoryPage');
  return props;
};

const propTypes = {
  books: booksType,
};
