import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {
  static propTypes = {
    movieData: PropTypes.object,
    onClickCallback: PropTypes.func,
		selectedMovie: PropTypes.object
  }

	onMovieClick = () => {
		this.props.onClickCallback(this.props.movieData);
	}

	getClass = () => {
		if (this.props.selectedMovie.id === this.props.movieData.id) {
			return "selected-movie";
		}
	}


  render() {
    return (
      <div onClick={this.onMovieClick} className={this.getClass()}>
        <h3>{this.props.movieData.title}</h3>
        <img src={this.props.movieData.image_url} alt="movie_poster"/>
        <p>{this.props.movieData.release_date}</p>
      </div>
    );
  }
}

export default Movie;
