import React from 'react';
import { connect } from 'react-redux';
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
import { select } from '../reducers/editor';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: 240,
    backgroundColor: '#fafafa',
  },
  drawerHeader: { height: 48 },
  deleteIcon: {
    fontSize: 18,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    selectHandler: id => {
      dispatch(select(id));
    },
  };
}

const SideBar = connect(state => state.article, mapDispatchToProps)(
  ({ classes, articles, selectHandler }) => (
    <Drawer
      type="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.drawerHeader} />
      <Divider />
      <List>
        {articles.map(article => (
          <Item
            key={article.id}
            classes={classes}
            {...article}
            selectHandler={selectHandler}
          />
        ))}
      </List>
    </Drawer>
  ),
);

const Item = ({ classes, id, date, title, selectHandler }) => (
  <ListItem button onClick={() => selectHandler(id)}>
    <ListItemText primary={title} secondary={date} />
    <ListItemSecondaryAction>
      <IconButton className={classes.deleteIcon} aria-label="Delete">
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default withStyles(styles)(SideBar);
