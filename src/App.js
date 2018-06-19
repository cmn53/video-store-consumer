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
		let updatedState = this.state;
		updatedState["movie"] = movieObj;
		this.setState(updatedState);
	}

	updateCustomer = (customerObj) => {
		let updatedState = this.state;
		updatedState["customer"] = customerObj;
		this.setState(updatedState);
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

				<RentalForm customer={this.state.customer} movie={this.state.movie}/>
				<Routes onClickCallback={this.updateMovie} onClickCustomer={this.updateCustomer}/>

      </div>
    );
  }
}

export default App;
