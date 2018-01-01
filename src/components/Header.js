import React from 'react';
import { withStyles } from 'material-ui/styles';
import { AppBar, Toolbar, Typography } from 'material-ui';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    position: 'absolute',
    backgroundColor: '#fafafa',
    boxShadow: '0 0 0 0',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
});

const Header = ({ classes }) => (
  <React.Fragment>
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography type="title">Blog Editor</Typography>
      </Toolbar>
    </AppBar>
  </React.Fragment>
);

export default withStyles(styles)(Header);
