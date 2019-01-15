import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Redirect } from 'react-router-dom';

import Main from '../components/Main/Main';
import WishList from '../components/WishList/WishList';
import Stuff from '../components/Stuff/Stuff';
import Help from '../components/Help/Help';
import BottomNav from '../components/BottomNav/BottomNav';
import NavBar from '../components/NavBar/NavBar';

const styles = theme => ({
  '@global': {
    a: {
      textDecoration: 'none',
      color: 'inherit'
    }
  }
});

class MainPage extends Component {
  state = {
    currentPersonId: 7,
    currentPerson: 'Butch Coolidge',
    currentThingId: '',
    currentThing: ''
  };

  render() {
    const { classes } = this.props;

    return (
      <div
        style={{
          userSelect: 'none'
        }}
      >
        <CssBaseline />
        <NavBar />
        <Route
          path="/"
          exact
          render={props => (
            <Main currentPersonId={this.state.currentPersonId} />
          )}
        />
        <Route
          path="/WishList"
          exact
          render={props => (
            <WishList currentPersonId={this.state.currentPersonId} />
          )}
        />
        <Route
          path="/Stuff"
          exact
          render={props => (
            <Stuff currentPersonId={this.state.currentPersonId} />
          )}
        />
        <Route path="/Help" exact component={Help} />
        <BottomNav />
      </div>
    );
  }
}

export default withStyles(styles)(MainPage);
