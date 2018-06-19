import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import axios from 'axios';

class SearchResults extends Component {
	static propTypes = {
		results: PropTypes.array.isRequired
	}

	addMovie = (params) => {
		axios.post("http://localhost:3000/movies", params)
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			console.log(error.messages);
		})
	}

  render() {
			const searchMovies = this.props.results.map((movie, index) => {
				return <Movie
					movieData={movie}
					key={index}
					onClickCallback={this.addMovie}
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
