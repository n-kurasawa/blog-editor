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
import AddIcon from 'material-ui-icons/Add';
import { withStyles } from 'material-ui/styles';
import { select } from '../reducers/editor';
import { add } from '../reducers/article';

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

const SideBar = connect(state => state.article, { select, add })(
  ({ classes, articles, select, add }) => (
    <Drawer
      type="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={add} aria-label="Add">
          <AddIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {articles.map(article => (
          <Item
            key={article.id}
            classes={classes}
            article={article}
            select={select}
          />
        ))}
      </List>
    </Drawer>
  ),
);

const Item = ({ classes, article, select }) => (
  <ListItem button onClick={() => select(article)}>
    <ListItemText primary={article.title} secondary={article.date} />
    <ListItemSecondaryAction>
      <IconButton className={classes.deleteIcon} aria-label="Delete">
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default withStyles(styles)(SideBar);
