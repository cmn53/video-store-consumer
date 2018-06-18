import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';

class SearchForm extends Component {

	constructor(){
		super();

		this.state = {
			query: ""
		}
	}

	onInputChange = (event) => {
		let updatedInput = {};
		updatedInput[event.target.name] = event.target.value;
		this.setState( updatedInput );
	}

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onSearchCallback(this.state.query);
	}



  render() {

    return (
      <form onSubmit={this.onFormSubmit}>
				<label htmlFor="query">Search Movies By: </label>
				<input
					type="text"
					name="query"
					value={this.state.query}
					onChange={this.onInputChange}
					/>
				<input type="submit" value="Search"/>
      </form>
    );
  }
}

export default SearchForm;
