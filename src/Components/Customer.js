import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Customer extends Component {
  static propTypes = {
		id: PropTypes.number,
    name: PropTypes.string,
    registered_at: PropTypes.object,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postal_code: PropTypes.string,
    phone: PropTypes.string,
    account_credit: PropTypes.number
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h3>Registered at: {this.props.registered_at}</h3>
        <h3>Address: {this.props.address} {this.props.city}, {this.props.state} {this.props.postal_code}</h3>
        <h3>Phone: {this.props.phone}</h3>
        <h3>Account credit: {this.props.account_credit}</h3>
      </div>
    );
  }
}

export default Customer;
