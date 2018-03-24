import React from 'react';
import { connect } from 'react-redux';
import { updateTitle } from '../../reducers/article';
import { changeTitle } from '../../reducers/editor';
import styles from './index.css';

const Title = connect(state => state.editor, {
  changeTitle,
  updateTitle,
})(({ id, title, changeTitle, updateTitle }) => (
  <input
    className={styles.title}
    type="text"
    placeholder="Untitled"
    value={title}
    onChange={e => {
      changeTitle(e.target.value);
      updateTitle(id, e.target.value);
    }}
  />
));

export default Title;
