import React from 'react';
import Editor from './components/Editor';
import Header from './components/Header';
import SideBar from './components/SideBar';

const styles = {
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
};

const App = () => (
  <React.Fragment>
    <Header />
    <div style={styles.appFrame}>
      <SideBar />
      <Editor />
    </div>
  </React.Fragment>
);

export default App;
