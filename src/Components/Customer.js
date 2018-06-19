import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Customer extends Component {
  static propTypes = {
    customerData: PropTypes.object
		// id: PropTypes.number,
    // name: PropTypes.string,
    // registered_at: PropTypes.object,
    // address: PropTypes.string,
    // city: PropTypes.string,
    // state: PropTypes.string,
    // postal_code: PropTypes.string,
    // phone: PropTypes.string,
    // account_credit: PropTypes.number
  }

  onCustomerClick = () => {
		this.props.onClickCallback(this.props.customerData);
	}

  render() {
    return (
      <div onClick={this.onCustomerClick}>
        <h2>{this.props.customerData.name}</h2>
        <h3>Registered at: {this.props.customerData.registered_at}</h3>
        <h3>Address: {this.props.customerData.address} {this.props.customerData.city}, {this.props.customerData.state} {this.props.customerData.postal_code}</h3>
        <h3>Phone: {this.props.customerData.phone}</h3>
        <h3>Account credit: {this.props.customerData.account_credit}</h3>
      </div>
    );
  }
}

export default Customer;
