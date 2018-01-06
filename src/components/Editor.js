import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import remark from 'remark';
import reactRenderer from 'remark-react';
import breaksRenderer from 'remark-breaks';

import RemarkLowlight from 'remark-react-lowlight';
import js from 'highlight.js/lib/languages/javascript';

import { changeTitle, changeContents } from '../reducers/editor';
import './Editor.css';

const styles = theme => ({
  container: {
    display: 'flex',
    width: '100%',
    padding: theme.spacing.unit,
    height: 'calc(98% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 48px)',
      marginTop: 48,
    },
  },
  title: {
    width: '95%',
    border: 0,
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    fontSize: 22,
    padding: 10,
    marginBottom: 10,
  },
  editor: {
    width: '50%',
    height: '97%',
    borderRight: '1px solid rgba(0, 0, 0, 0.12)',
  },
  textArea: {
    width: '99%',
    height: '90%',
    resize: 'none',
    fontSize: 14,
    border: 0,
  },
  preview: {
    padding: 10,
    width: '50%',
    height: '97%',
  },
});

const processor = remark()
  .use(breaksRenderer)
  .use(reactRenderer, {
    remarkReactComponents: {
      code: RemarkLowlight({ js }),
    },
  });

class Editor extends React.Component {
  onChangeTitle(e) {
    this.props.changeTitle(e.target.value);
  }

  onChangeContents(e) {
    this.props.changeContents(e.target.value);
  }

  render() {
    const { classes, title, contents } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.editor}>
          <input
            className={classes.title}
            type="text"
            placeholder="Untitled"
            value={title}
            onChange={this.onChangeTitle.bind(this)}
          />
          <textarea
            className={classes.textArea}
            value={contents}
            onChange={this.onChangeContents.bind(this)}
          />
        </div>
        <div id="preview" className={classes.preview}>
          {
            processor.processSync(contents, {
              breaks: true,
              gfm: true,
            }).contents
          }
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(
  connect(state => state.editor, { changeTitle, changeContents })(Editor),
);
