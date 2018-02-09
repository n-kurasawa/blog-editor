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
import { select } from '../reducers/editor';
import { add, remove } from '../reducers/article';
import styles from './SideBar.css';

const SideBar = connect(state => state.article, { select, add, remove })(
  ({ articles, select, add, remove }) => (
    <Drawer
      type="permanent"
      classes={{
        paper: styles.drawerPaper,
      }}
      anchor="left"
    >
      <div className={styles.drawerHeader}>
        <IconButton className={styles.add} onClick={add} aria-label="Add">
          <AddIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {articles.map(article => (
          <Item
            key={article.id}
            article={article}
            select={select}
            remove={remove}
          />
        ))}
      </List>
    </Drawer>
  ),
);

const Item = ({ article, select, remove }) => (
  <ListItem button onClick={() => select(article)}>
    <i className={`${styles.check} material-icons`}>check</i>
    <ListItemText className={styles.text} primary={article.title} secondary={article.date} />
    <ListItemSecondaryAction>
      <IconButton
        className={styles.deleteButton}
        onClick={() => {
          remove(article.id);
        }}
        aria-label="Delete"
      >
        <DeleteIcon className={styles.deleteIcon} />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default SideBar;
