import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Routes from './Components/Routes';
import RentalForm from './Components/RentalForm';

class App extends Component {
	constructor() {
		super();
		this.state = {
			customer: {},
			movie: {}
		}
	}

	updateMovie = (movieObj) => {
		console.log("went up to App!");
		this.setState({ movie: movieObj})
	}

	updateCustomer = (customerObj) => {
		this.setState({ customer: customerObj })
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

				<RentalForm customer={this.state.customer} movie={this.state.movie}/>
				<Routes newProp={"some string"} updateMovieCallback={this.updateMovie} updateCustomerCallback={this.updateCustomer}/>

      </div>
    );
  }
}

export default App;
