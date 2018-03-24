import React from 'react';
import { connect } from 'react-redux';
import { updateContents } from '../../reducers/article';
import { changeContents } from '../../reducers/editor';
import styles from './index.css';

const Content = connect(state => state.editor, {
  changeContents,
  updateContents,
})(({ id, contents, changeContents, updateContents }) => (
  <textarea
    className={styles.textArea}
    value={contents}
    onChange={e => {
      changeContents(e.target.value);
      updateContents(id, e.target.value);
    }}
  />
));

export default Content;
