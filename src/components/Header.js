import React from 'react';
import { connect } from 'react-redux';
import { Icon, IconButton } from 'material-ui';
import { upload } from '../reducers/remoteArticle';
import styles from './Header.css';

const Header = connect(state => state, { upload })(({ upload, editor }) => (
  <React.Fragment>
    <header className={styles.appBar}>
      <IconButton
        className={styles.btn}
        onClick={() => {
          upload(editor);
        }}
      >
        <Icon color="action">file_upload</Icon>
      </IconButton>
    </header>
  </React.Fragment>
));

export default Header;
