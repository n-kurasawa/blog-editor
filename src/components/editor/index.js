import React from 'react';
import { connect } from 'react-redux';
import remark from 'remark';
import reactRenderer from 'remark-react';
import breaksRenderer from 'remark-breaks';
import emoji from 'remark-emoji';

import RemarkLowlight from 'remark-react-lowlight';
import js from 'highlight.js/lib/languages/javascript';

import Title from './title';
import Tag from './tag';
import Content from './content';

import styles from './index.css';

const processor = remark()
  .use(breaksRenderer)
  .use(reactRenderer, {
    sanitize: false,
    remarkReactComponents: {
      code: RemarkLowlight({ js }),
    },
  })
  .use(emoji);

const Editor = () => (
  <div className={styles.container}>
    <div className={styles.editor}>
      <Title />
      <Tag />
      <Content />
    </div>
    <Preview />
  </div>
);

const Preview = connect(state => state.editor)(({ contents }) => (
  <div id="preview" className={styles.preview}>
    {
      processor.processSync(contents, {
        breaks: true,
        gfm: true,
      }).contents
    }
  </div>
));

export default Editor;
