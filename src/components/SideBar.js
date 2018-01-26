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
import BottomNavigation, {
  BottomNavigationButton,
} from 'material-ui/BottomNavigation';
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
        <SimpleBottomNavigation />
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
    <ListItemText primary={article.title} secondary={article.date} />
    <ListItemSecondaryAction>
      <IconButton
        onClick={() => {
          remove(article.id);
        }}
        aria-label="Delete"
      >
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <BottomNavigation
        className={styles.switch}
        style={{ height: 'inherit', backgroundColor: 'inherit' }}
        value={value}
        onChange={this.handleChange}
        showLabels
      >
        <BottomNavigationButton label="Local" />
        <BottomNavigationButton label="Remote" />
      </BottomNavigation>
    );
  }
}

export default SideBar;
