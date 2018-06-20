import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class RentalForm extends Component {
	static propTypes = {
		customer: PropTypes.object,
		movie: PropTypes.object,
		updateStatusCallback: PropTypes.func,
		clearRentalCallback: PropTypes.func
	}

	onSubmit = () => {
		console.log("submitted rental info");
		const custID = this.props.customer.id;
		const custName = this.props.customer.name;
		const movieTitle = this.props.movie.title;

		axios.post(`http://localhost:3000/rentals/${movieTitle}/check-out?customer_id=${custID}&due_date=2018-08-08`)
		.then((response) => {
			this.props.updateStatusCallback(`Successfully checked out ${movieTitle} to ${custName}`, "success")
		})
		.catch((error) => {
			console.log(error);
			this.props.updateStatusCallback("Failed to check out movie", "failure")
		});

		this.props.clearRentalCallback();
	}

	render() {

		return (
			<div>
				<div>
					Customer: {this.props.customer.name}
				</div>
				<div>
					Movie: {this.props.movie.title}
				</div>
				<button type="button" onClick={this.onSubmit}>
					Rent Movie
				</button>
			</div>
		);
	}
}

export default RentalForm;
