import React from 'react';
import { connect } from 'react-redux';
import reactRenderer from 'remark-react';
import emoji from 'remark-emoji';
import remark from 'remark';
import breaksRenderer from 'remark-breaks';
import js from 'highlight.js/lib/languages/javascript';
import RemarkLowlight from 'remark-react-lowlight';

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

export default Preview;
