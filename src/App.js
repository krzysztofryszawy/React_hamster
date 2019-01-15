import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lime from '@material-ui/core/colors/lime';
import pink from '@material-ui/core/colors/pink';
import { BrowserRouter } from 'react-router-dom';

import MainPage from './MainPage/MainPage';

let theme = createMuiTheme({
  typography: {
    useNextVariants: true
    // fontFamily: 'Poiret One, serif'
  },
  palette: {
    // type: 'dark',
    primary: lime,
    secondary: pink
    // text: {
    //   primary: '#c2c2c2'
    // }
  },
  status: {
    danger: 'red'
  }
});

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MuiThemeProvider theme={theme}>
          <MainPage />
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
