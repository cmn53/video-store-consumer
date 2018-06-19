import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';

class Library extends Component {
  constructor(){
    super();

    this.state = {
      movies: []
    };

  }

  componentDidMount(){

    axios.get('http://localhost:3000/movies')
    .then((response) => {
      console.log(response.data);
      this.setState({
        movies: response.data
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie
				movieData={movie}
				key={index}
				onClickCallback={this.rentMovie}
				/>
    })
    console.log(movies);
    return (
      <div>
        {movies}
      </div>
    );
  }
}

export default Library;
