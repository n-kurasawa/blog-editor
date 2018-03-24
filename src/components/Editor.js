import React from 'react';
import { connect } from 'react-redux';
import remark from 'remark';
import reactRenderer from 'remark-react';
import breaksRenderer from 'remark-breaks';
import emoji from 'remark-emoji';

import RemarkLowlight from 'remark-react-lowlight';
import js from 'highlight.js/lib/languages/javascript';

import { changeTitle, changeContents, changeTags } from '../reducers/editor';
import { updateTitle, updateContents, updateTags } from '../reducers/article';
import styles from './Editor.css';

const processor = remark()
  .use(breaksRenderer)
  .use(reactRenderer, {
    sanitize: false,
    remarkReactComponents: {
      code: RemarkLowlight({ js }),
    },
  })
  .use(emoji);

const Editor = connect(state => state.editor)(({ contents }) => (
  <div className={styles.container}>
    <div className={styles.editor}>
      <TitleInput />
      <TagInput />
      <ContentInput />
    </div>
    <div id="preview" className={styles.preview}>
      {
        processor.processSync(contents, {
          breaks: true,
          gfm: true,
        }).contents
      }
    </div>
  </div>
));

const TitleInput = connect(state => state.editor, {
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

const TagInput = connect(state => state.editor, {
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

const ContentInput = connect(state => state.editor, {
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

export default Editor;
