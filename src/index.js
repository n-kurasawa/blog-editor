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
import ArticleApi from './articleApi';

const client = {
  db: new ArticleDb(),
  api: new ArticleApi(),
};

const thunkWithClient = thunk.withExtraArgument(client);
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
