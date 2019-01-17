import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Redirect } from 'react-router-dom';
import axios from '../axios-instance';
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
    },
    body: {}
  }
});

class MainPage extends Component {
  componentDidMount() {
    // window.FB.getLoginStatus(response => {
    //   if (response.status !== 'connected') {
    //     console.log('niezalogowany');
    //   } else {
    //     console.log('ZALOGOWANY');
    //     window.FB.api('/me', user => {
    //       console.log(user);
    //       this.setState({ loading: false, fbLoginPerson: user });
    //     });
    //   }
    // });
  }

  state = {
    loading: false,
    currentPerson: {}
  };

  savePersonHandler = () => {
    axios
      .put(
        `/People/${this.state.currentPerson.id}.json`,
        this.state.currentPerson
      )
      .then(response => {
        // console.log(response);
      })
      .catch(error => {
        // console.log(error);
      });
  };

  getPersonHandler = idFromFB => {
    this.setState({ loading: true });
    // console.log(`/People/${idFromFB}.json`);
    axios
      .get(`/People/${idFromFB}.json`)
      .then(response => {
        console.log('getPersonHandler // response  ', response);
        this.setState({ currentPerson: response.data, loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  };

  fbLogin = () => {
    this.setState({ loading: true });
    window.FB.getLoginStatus(response => {
      // console.log(response);
      if (response.status !== 'connected') {
        window.FB.login();
      } else {
        window.FB.api('/me', user => {
          // console.log(user.id);
          this.getPersonHandler(user.id);
        });
      }
    });
  };

  fbLogout = () => {
    window.FB.getLoginStatus(response => {
      // console.log(response);
      window.FB.logout();
      this.setState({ currentPerson: {} });
    });
  };

  render() {
    // console.log(this.state.currentPerson.id);
    // let AllPeopleIds = Object.keys(databasePeople_json[0]);
    // console.log(AllPeopleIds);

    // let endPoint = databasePeople_json[0][this.state.currentPersonId];

    const { classes } = this.props;

    return (
      <div
        style={{
          userSelect: 'none'
        }}
      >
        <CssBaseline />
        <NavBar />

        <button style={{ marginTop: '5rem' }} onClick={this.fbLogin}>
          LOGIN FB
        </button>
        <button style={{ marginTop: '5rem' }} onClick={this.fbLogout}>
          LOGOUT FB
        </button>
        {/* <button style={{ marginTop: '5rem' }} onClick={this.savePersonHandler}>
          SAVE FIREBASE
        </button>
        <button style={{ marginTop: '5rem' }} onClick={this.getPersonHandler}>
          LOAD FIREBASE
        </button> */}
        {this.state.currentPerson.name || 'zaloguj sie'}
        <Route
          path="/"
          exact
          render={props => (
            <Main currentPersonId={this.state.currentPerson.id} />
          )}
        />
        <Route
          path="/WishList"
          exact
          render={props => (
            <WishList currentPersonId={this.state.currentPerson.id} />
          )}
        />
        <Route
          path="/Stuff"
          exact
          render={props => (
            <Stuff currentPersonId={this.state.currentPerson.id} />
          )}
        />
        <Route path="/Help" exact component={Help} />
        <BottomNav />
      </div>
    );
  }
}

export default withStyles(styles)(MainPage);
