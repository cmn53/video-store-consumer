import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Customer extends Component {
  static propTypes = {
    customerData: PropTypes.object,
    onClickCallback: PropTypes.func
  }

  onCustomerClick = () => {
		this.props.onClickCallback(this.props.customerData);
	}

  render() {
    return (
      <div onClick={this.onCustomerClick}>
        <h3>{this.props.customerData.name}</h3>
        <p>Registered at: {this.props.customerData.registered_at}</p>
        <p>Address: {this.props.customerData.address} {this.props.customerData.city}, {this.props.customerData.state} {this.props.customerData.postal_code}</p>
        <p>Phone: {this.props.customerData.phone}</p>
        <p>Account credit: ${this.props.customerData.account_credit.toFixed(2)}</p>
      </div>
    );
  }
}

export default Customer;
