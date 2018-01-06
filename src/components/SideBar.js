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

const SideBar = connect(state => state.article, { select })(
  ({ classes, articles, select }) => (
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
