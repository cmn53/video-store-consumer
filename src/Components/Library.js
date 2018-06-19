import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';

class Library extends Component {

	static propTypes = {
		onClickCallback: PropTypes.func
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
				onClickCallback={this.props.onClickCallback}
				/>
    })
    return (
      <div>
        {movies}
      </div>
    );
  }
}

export default Library;
