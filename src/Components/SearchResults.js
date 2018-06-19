import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

class SearchResults extends Component {
	static propTypes = {
		results: PropTypes.array.isRequired
	}

  render() {
			const searchMovies = this.props.results.map((movie, index) => {
				return <Movie
					movieData={movie}
					key={index}
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
