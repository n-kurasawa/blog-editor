import React from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';
import breaksRenderer from 'remark-breaks';

import RemarkLowlight from 'remark-react-lowlight';
import js from 'highlight.js/lib/languages/javascript';

import './Editor.css';

const styles = {
  container: {
    display: 'flex',
    height: '100%',
    margin: 5,
  },
  textArea: {
    width: '50%',
    height: '90%',
    resize: 'vertical',
    fontSize: 14,
  },
  preview: {
    padding: 10,
    width: '50%',
    height: '90%',
  },
};

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '# hello world' };
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div style={styles.container}>
        <textarea
          style={styles.textArea}
          value={this.state.text}
          onChange={this.onChange.bind(this)}
        />
        <div id="preview" style={styles.preview}>
          {
            remark()
              .use(breaksRenderer)
              .use(reactRenderer, {
                remarkReactComponents: {
                  code: RemarkLowlight({ js }),
                },
              })
              .processSync(this.state.text, {
                breaks: true,
                gfm: true,
              }).contents
          }
        </div>
      </div>
    );
  }
}
