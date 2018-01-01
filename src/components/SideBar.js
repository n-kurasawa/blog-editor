import React from 'react';
import { Drawer, List, Divider } from 'material-ui';
import { withStyles } from 'material-ui/styles';

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    backgroundColor: theme.palette.primary[900],
    color: theme.palette.primary[50],
  },
  drawerHeader: theme.mixins.toolbar,
});

const SideBar = ({ classes }) => (
  <Drawer
    type="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <div className={classes.drawerHeader} />
    <Divider />
    <List>hoge</List>
    <Divider />
    <List>hoge</List>
  </Drawer>
);

export default withStyles(styles)(SideBar);
