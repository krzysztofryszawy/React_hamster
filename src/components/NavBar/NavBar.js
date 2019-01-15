import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    fontFamily: 'Poiret One, serif',
    position: 'fixed',
    top: 0,
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
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
      transform: 'translateY(10px)'
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
    transform: 'translateY(10px)'
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
          to="/Future1"
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          📷
        </NavLink>
        🐹 HAMSTER APP
        <NavLink
          to="/Future2"
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          🎁
        </NavLink>
      </div>
    );
  }
}

export default withStyles(styles)(BottomNav);
