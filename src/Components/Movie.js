import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  static propTypes = {
    movieData: PropTypes.object,
    onClickCallback: PropTypes.func
  }

	onMovieClick = () => {
		this.props.onClickCallback(this.props.movieData);
	}


  render() {
    return (
      <div onClick={this.onMovieClick}>
        <h3>{this.props.movieData.title}</h3>
        <img src={this.props.movieData.image_url} alt="movie_poster"/>
        <p>{this.props.movieData.release_date}</p>
      </div>
    );
  }
}

export default Movie;
