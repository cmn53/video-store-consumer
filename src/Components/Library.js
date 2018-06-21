import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import './Library.css';

class Library extends Component {

	static propTypes = {
		onClickCallback: PropTypes.func,
    updateStatusCallback: PropTypes.func
	}
  constructor(){
    super();

    this.state = {
      movies: []
    };

  }

  componentDidMount(){

    axios.get('http://localhost:3000/movies')
    .then((response) => {
      this.setState({
        movies: response.data
      })
      this.props.updateStatusCallback(`Loaded ${this.state.movies.length} movies`, "success")
    })
    .catch((error) => {
      console.log(error);
      this.props.updateStatusCallback("Failed to load movies", "failure")
    });
  }

  render() {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie
				movieData={movie}
				key={index}
				onClickCallback={this.props.onClickCallback}
				/>
    })
    return (
      <div className="list movies">
        {movies}
      </div>
    );
  }
}

export default Library;
