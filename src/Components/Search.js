import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      results: []
    }
  }

  onSearch = (query) => {
    axios.get(`http://localhost:3000/movies?query=${query}`)
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
    return (
      <div>
        <SearchForm onSearchCallback={this.onSearch}/>
        <SearchResults results={this.state.results}/>
      </div>
    );
  }
}

export default Search;
