import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuItems: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));
export default function Menu() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.menuItems}>
          <Button
            data-testid="menu-btn"
            component={Link}
            to="/"
            color="inherit"
          >
            <Typography variant="h6">Book Shop</Typography>
          </Button>
          <Button className={classes.cartBtn}
            data-testid="cart-btn"
            component={Link}
            to="/cart"
            color="inherit"
          >
            <Typography variant="h6">Cart</Typography>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
