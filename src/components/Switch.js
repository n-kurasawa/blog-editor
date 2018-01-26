import React from 'react';
import BottomNavigation, {
  BottomNavigationButton,
} from 'material-ui/BottomNavigation';
import styles from './Switch.css';

export default class Switch extends React.Component {
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
