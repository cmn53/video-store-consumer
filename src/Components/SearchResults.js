import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Library from './Library';
import Customers from './Customers'

class SearchResults extends Component {

	constructor(){
		super();

		this.state = {
			results: []
		};

	}

	componentDidMount(){

		axios.get('http://localhost:3000/movies?query='+{this.props.query})
		.then((response) => {

			this.setState({
				results: response.data
			});

		})
		.catch((error) => {
			console.log(error);
		});
	}


  render() {
			const searchMovies = this.state.results.map((movie, index) => {
				return <Movie
					movieData={movie}
					key={index}
					callbackFunc={this.addToLib}
				/>
			});
    return (
			<div>
				{searchMovies}
			</div>
    );
  }
}

export default SearchResults;
