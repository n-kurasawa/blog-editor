import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { AppBar, Toolbar, Icon, IconButton } from 'material-ui';
import { upload } from '../reducers/remoteArticle';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    minHeight: 0,
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    position: 'absolute',
    backgroundColor: '#fafafa',
    boxShadow: '0 0 0 0',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  toolbar: {
    minHeight: 0,
  },
  flex: {
    flex: 1,
  },
});

const Header = connect(state => state, { upload })(
  ({ classes, upload, editor }) => (
    <React.Fragment>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.flex} />
          <IconButton
            onClick={() => {
              upload(editor);
            }}
          >
            <Icon color="action">file_upload</Icon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  ),
);

export default withStyles(styles)(Header);
