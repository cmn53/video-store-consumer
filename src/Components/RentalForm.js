import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';

class RentalFrom extends Component {
	static propTypes = {
		customer: PropTypes.object,
		movie: PropTypes.object
	}

	onFormSubmit = (event) => {
		event.preventDefault();
		console.log("submitted form");
		console.log(this.props.customer);
	}

	render() {

		return (
			<form onSubmit={this.onFormSubmit}>
				<div>
					<label htmlFor="customer">Customer</label>
					<input
						type="text"
						name="customer"
						value={this.props.customer.name}
						disabled={true}
						/>
				</div>

				<div>
				<label htmlFor="movie">Movie</label>
				<input
					type="text"
					name="movie"
					value={this.props.movie.title}
					disabled={true}
					/>
				</div>
				<input type="submit" value="Rent Movie"/>
			</form>
		);
	}
}

export default RentalFrom;
