import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import BookCard from './BookCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks } from '../actions';

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
  const books = useSelector(state => state.data.books);

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
