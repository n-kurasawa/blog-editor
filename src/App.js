import React from 'react';
import Editor from './components/Editor';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { connect } from 'react-redux';
import { load } from './reducers/article';

import styles from './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className={styles.appFrame}>
          <SideBar />
          <Editor />
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, { load })(App);
