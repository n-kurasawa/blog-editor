import React from 'react';
import Title from './title';
import Tag from './tag';
import Content from './content';
import Preview from './preview';

import styles from './index.css';

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

export default Editor;
