import React from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';
import breaksRenderer from 'remark-breaks';

import RemarkLowlight from 'remark-react-lowlight';
import js from 'highlight.js/lib/languages/javascript';

import './Editor.css';

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
      <div>
        <textarea value={this.state.text} onChange={this.onChange.bind(this)} />
        <div id="preview">
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
