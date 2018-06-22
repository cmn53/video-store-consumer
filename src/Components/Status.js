import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Status.css';

class Status extends Component {
  static propTypes = {
    message: PropTypes.string,
    type: PropTypes.string
  }

  render() {
    return (
      <div className={`status ${this.props.type}`}>
        <h3>{this.props.message}</h3>
      </div>
    );
  }
}

export default Status;
