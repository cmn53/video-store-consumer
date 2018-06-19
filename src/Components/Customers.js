import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer';

class Customers extends Component {
  constructor(){
		super();

		this.state = {
			customers: []
		};

	}

	componentDidMount(){

		axios.get('http://localhost:3000/customers')
		.then((response) => {
			this.setState({
				customers: response.data
			})
		})
		.catch((error) => {
			console.log(error);
		});
	}

  render() {
    const customers = this.state.customers.map((customer, index) => {
      return <Customer customerData={customer} key={index} onClickCallback={this.props.onClickCustomer}/>
    })
    return (
      <div>
        {customers}
      </div>
    );
  }
}

export default Customers;
