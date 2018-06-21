import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Routes.css';

class RentalForm extends Component {
	static propTypes = {
		customer: PropTypes.object,
		movie: PropTypes.object,
		updateStatusCallback: PropTypes.func,
		clearRentalCallback: PropTypes.func
	}

	onCheckOut = () => {
		console.log("submitted rental info for check out");
		const custID = this.props.customer.id;
		const custName = this.props.customer.name;
		const movieTitle = this.props.movie.title;

		axios.post(`http://localhost:3000/rentals/${movieTitle}/check-out?customer_id=${custID}`)
		.then((response) => {
			this.props.updateStatusCallback(`Successfully checked out ${movieTitle} to ${custName}`, "success")
		})
		.catch((error) => {
			console.log(error);
			this.props.updateStatusCallback("Failed to check out movie", "failure")
		});

		this.props.clearRentalCallback();
	}

	onCheckIn = () => {
		console.log("submitted rental info for check in");
		const custID = this.props.customer.id;
		const custName = this.props.customer.name;
		const movieTitle = this.props.movie.title;

		axios.post(`http://localhost:3000/rentals/${movieTitle}/return?customer_id=${custID}`)
		.then((response) => {
			this.props.updateStatusCallback(`Successfully checked in ${movieTitle} for ${custName}`, "success")
		})
		.catch((error) => {
			console.log(error.response);
			this.props.updateStatusCallback(`Failed to check in movie: ${error.response.data.errors.rental}`, "failure")
		});

		this.props.clearRentalCallback();
	}

	render() {

		return (
			<div className="actions">
				<div>
					Customer: {this.props.customer.name?this.props.customer.name:<span>click customer to select</span>}
				</div>
				<div>
					Movie: {this.props.movie.title?this.props.movie.title:<span>click movie to select</span>}
				</div>
				<button type="button" onClick={this.onCheckOut}>
					Check Out Movie
				</button>
				<button type="button" onClick={this.onCheckIn}>
					Check In Movie
				</button>
			</div>
		);
	}
}

export default RentalForm;
