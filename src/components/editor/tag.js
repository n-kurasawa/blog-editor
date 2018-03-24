import React from 'react';
import { connect } from 'react-redux';
import { changeTags } from '../../reducers/editor';
import { updateTags } from '../../reducers/article';
import styles from './index.css';

const Tag = connect(state => state.editor, {
  changeTags,
  updateTags,
})(({ id, tags, changeTags, updateTags }) => (
  <input
    className={styles.tag}
    value={tags}
    onChange={e => {
      changeTags(e.target.value);
      updateTags(id, e.target.value);
    }}
    type="text"
    placeholder="tag"
  />
));

export default Tag;
