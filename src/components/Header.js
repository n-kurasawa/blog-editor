import React from 'react';
import { withStyles } from 'material-ui/styles';
import { AppBar, Toolbar, Typography } from 'material-ui';

const styles = theme => ({
  appBar: {
    backgroundColor: theme.palette.primary[900],
  },
});

const Header = ({ classes }) => (
  <AppBar className={classes.appBar} position="static">
    <Toolbar>
      <Typography type="title">Blog Editor</Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
