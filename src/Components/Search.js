import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

class Search extends Component {
  static propTypes = {
    updateStatusCallback: PropTypes.func
  }

  constructor() {
    super();

    this.state = {
      results: []
    }
  }

  componentDidMount() {
    this.props.updateStatusCallback("", "success")
  }

  onSearch = (query) => {
    axios.get(`http://localhost:3000/movies?query=${query}`)
		.then((response) => {
			this.setState({results: response.data});
      this.props.updateStatusCallback("Successfully loaded search results", "success");
		})
		.catch((error) => {
			console.log(error);
      this.props.updateStatusCallback("Failed to load search results", "failure");
		});
  }

  render() {
    return (
      <div>
        <SearchForm onSearchCallback={this.onSearch}/>
        <SearchResults results={this.state.results} updateStatusCallback={this.props.updateStatusCallback}/>
      </div>
    );
  }
}

export default Search;
