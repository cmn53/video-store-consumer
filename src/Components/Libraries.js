import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Library from './Library';
import Customers from './Customers'

class Libraries extends Component {

	constructor(){
		super();

		this.state = {
			customers: [],
			movies: []
		};

	}

	componentDidMount(){

		axios.get('http://localhost:3000/customers')
		.then((response) => {
			console.log(response.data);
			this.setState({
				customers: response.data
			})
		})
		.catch((error) => {
			console.log(error);
		});

		axios.get('http://localhost:3000/movies')
		.then((response) => {
			console.log(response.data);
			this.setState({
				movies: response.data
			})
		})
		.catch((error) => {
			console.log(error);
		});



	}


  render() {
    return (
			<div>
				THIS IS A LIBBRARY
				<Customers />
				<Library />

			</div>
    );
  }
}

export default Libraries;
