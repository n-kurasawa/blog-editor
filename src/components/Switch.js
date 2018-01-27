import React from 'react';
import { connect } from 'react-redux';
import BottomNavigation, {
  BottomNavigationButton,
} from 'material-ui/BottomNavigation';
import styles from './Switch.css';
import { toggleStorage } from '../reducers/storage';

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.storage,
    };
  }

  handleChange = (event, value) => {
    this.props.toggleStorage(value);
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

export default connect(state => state.storage, { toggleStorage })(Switch);
