import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    backgroundColor: theme.palette.grey[200],
    fontWeight: 800,
    zIndex: '99999',
    [theme.breakpoints.down(520)]: {
      justifyContent: 'space-evenly'
    }
  },
  link: {
    padding: '1rem',
    marginRight: '1rem',
    color: theme.palette.primary.dark,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#202020',
      transform: 'translateY(-10px)'
    },
    textAlign: 'center',
    transition: 'transform .2s ease-out',
    [theme.breakpoints.down(520)]: {
      padding: '.3rem',
      marginRight: 0,
      marginLeft: '.1rem',
      fontWeight: 500,
      fontSize: '.9rem'
    }
  },
  activeLink: {
    backgroundColor: theme.palette.primary.main,
    color: '#202020',
    transform: 'translateY(-10px)'
  }
});

class BottomNav extends React.Component {
  state = {
    value: '0'
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <NavLink
          exact
          to="/"
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          Main
        </NavLink>
        <NavLink
          to="/WishList"
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          WishList
        </NavLink>
        <NavLink
          to="/Stuff"
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          Stuff
        </NavLink>
        <NavLink
          to="/Help"
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          Help
        </NavLink>
      </div>
    );
  }
}

export default withStyles(styles)(BottomNav);
