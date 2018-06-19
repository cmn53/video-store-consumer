import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import axios from 'axios';

class SearchResults extends Component {
	static propTypes = {
		results: PropTypes.array.isRequired
	}

	addMovie = (params) => {
		const image_url = params.image_url.split("/").pop();
		const paramsString = `title=${params.title}&overview=${params.overview}&release_date=${params.release_date}&image_url=/${image_url}&external_id=${params.external_id}`

		axios.post(
			"http://localhost:3000/movies?" + `${paramsString}`)
		.then((response) => {
			console.log(response.data);
			this.props.updateStatusCallback(`Successfully added ${params.title} to the rental library`, "success");
		})
		.catch((error) => {
			console.log(error.messages);
			this.props.updateStatusCallback("Failed to add movie to the rental library", "failure");
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
