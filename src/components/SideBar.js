import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  IconButton,
} from 'material-ui';
import DeleteIcon from 'material-ui-icons/Delete';
import { withStyles } from 'material-ui/styles';

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    backgroundColor: '#fafafa',
  },
  drawerHeader: { height: 48 },
  deleteIcon: {
    fontSize: 18,
  },
});

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const SideBar = ({ classes }) => (
  <Drawer
    type="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
    anchor="left"
  >
    <div className={classes.drawerHeader} />
    <Divider />
    <List>{generate(<Item classes={classes} />)}</List>
  </Drawer>
);

const Item = ({ classes }) => (
  <ListItem button>
    <ListItemText primary="Single-line item" />
    <ListItemSecondaryAction>
      <IconButton className={classes.deleteIcon} aria-label="Delete">
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default withStyles(styles)(SideBar);
