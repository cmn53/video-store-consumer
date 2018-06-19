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
		const custID = this.props.customer.id;
		const movieTitle = this.props.movie.title;
		const movieID = this.props.movie.id;

		axios.post(`http://localhost:3000/rentals/${movieTitle}/check-out?customer_id=${custID}&due_date=2018-08-08`)
		.then((response) => {
			console.log(response.data);
			this.props.updateStatusCallback(`Successfully checked out ${movieTitle} to ${this.props.customer.name}`, "success")
		})
		.catch((error) => {
			console.log(error);
			this.props.updateStatusCallback("Failed to check out movie", "failure")
		})
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
