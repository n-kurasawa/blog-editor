import React from 'react';
import Editor from './components/Editor';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { connect } from 'react-redux';
import { load } from './reducers/article';
import { remoteLoad } from './reducers/remoteArticle';

const styles = {
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
};

class App extends React.Component {
  componentDidMount() {
    this.props.load();
    this.props.remoteLoad();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div style={styles.appFrame}>
          <SideBar />
          <Editor />
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, { load, remoteLoad })(App);
