import React from 'react';
import { withStyles } from 'material-ui/styles';
import remark from 'remark';
import reactRenderer from 'remark-react';
import breaksRenderer from 'remark-breaks';

import RemarkLowlight from 'remark-react-lowlight';
import js from 'highlight.js/lib/languages/javascript';

import './Editor.css';

const styles = theme => ({
  container: {
    display: 'flex',
    width: '100%',
    padding: theme.spacing.unit,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
  textArea: {
    width: '50%',
    height: '97%',
    resize: 'vertical',
    fontSize: 14,
  },
  preview: {
    padding: 10,
    width: '50%',
    height: '97%',
  },
});

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '# hello world' };
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <textarea
          className={classes.textArea}
          value={this.state.text}
          onChange={this.onChange.bind(this)}
        />
        <div id="preview" className={classes.preview}>
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

export default withStyles(styles)(Editor);
