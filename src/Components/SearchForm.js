import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
	static propTypes = {
		onSearchCallback: PropTypes.func.isRequired
	}

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
