import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { blueGrey } from 'material-ui/colors';
import App from './App';

import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),
);
