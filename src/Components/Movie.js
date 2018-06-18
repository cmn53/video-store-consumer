import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  static propTypes = {
    movieData: PropTypes.object
		// id: PropTypes.number,
    // title: PropTypes.string,
    // overview: PropTypes.string,
    // release_date: PropTypes.string,
		// image_url: PropTypes.string,
    // inventory: PropTypes.number
  }

  render() {
    return (
      <div>
        <h2>{this.props.movieData.title}</h2>
        <img src={this.props.movieData.image_url} alt="movie_poster"/>
        <h3>{this.props.movieData.overview}</h3>
        <h3>{this.props.movieData.release_date}</h3>
        <h3>{this.props.movieData.inventory}</h3>
      </div>
    );
  }
}

export default Movie;
