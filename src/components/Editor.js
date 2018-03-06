import React from 'react';
import { connect } from 'react-redux';
import remark from 'remark';
import reactRenderer from 'remark-react';
import breaksRenderer from 'remark-breaks';
import emoji from 'remark-emoji';

import RemarkLowlight from 'remark-react-lowlight';
import js from 'highlight.js/lib/languages/javascript';

import { changeTitle, changeContents } from '../reducers/editor';
import { updateTitle, updateContents } from '../reducers/article';
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

const Editor = connect(state => state.editor, {
  changeTitle,
  changeContents,
  updateTitle,
  updateContents,
})(
  ({
    id,
    title,
    contents,
    changeTitle,
    changeContents,
    updateTitle,
    updateContents,
  }) => (
    <div className={styles.container}>
      <div className={styles.editor}>
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
        <input className={styles.tag} type="text" placeholder="tag" />
        <textarea
          className={styles.textArea}
          value={contents}
          onChange={e => {
            changeContents(e.target.value);
            updateContents(id, e.target.value);
          }}
        />
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
  ),
);

export default Editor;
