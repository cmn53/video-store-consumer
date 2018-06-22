import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Customer.css';

class Customer extends Component {
  static propTypes = {
    customerData: PropTypes.object,
    onClickCallback: PropTypes.func,
		selectedCustomer: PropTypes.object,
  }

  onCustomerClick = () => {
		this.props.onClickCallback(this.props.customerData);
	}

	getClass = () => {
		if (this.props.selectedCustomer.id === this.props.customerData.id) {
			return "selected-customer";
		}
	}

  render() {
    return (
      <div onClick={this.onCustomerClick} className={this.getClass()}>
        <h3>{this.props.customerData.name}</h3>
        <p>Registered at: {this.props.customerData.registration_date}</p>
        <p>Address: {this.props.customerData.address} {this.props.customerData.city}, {this.props.customerData.state} {this.props.customerData.postal_code}</p>
        <p>Phone: {this.props.customerData.phone}</p>
        <p>Account credit: ${this.props.customerData.account_credit.toFixed(2)}</p>
      </div>
    );
  }
}

export default Customer;
