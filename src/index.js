import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { blueGrey } from 'material-ui/colors';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import reducer from './reducers';
import ArticleDb from './articledb';

import './index.css';

const thunkWithClient = thunk.withExtraArgument(new ArticleDb());
const store = createStore(reducer, applyMiddleware(thunkWithClient));

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
