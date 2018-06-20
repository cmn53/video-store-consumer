import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Routes from './Components/Routes';
import RentalForm from './Components/RentalForm';
import Status from './Components/Status';

class App extends Component {
	constructor() {
		super();
		this.state = {
			customer: {},
			movie: {},
			status: {}
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

	updateStatus = (message, type) => {
		this.setState({status: {message: message, type: type}});
	}

	clearRental = () => {
		this.setState({customer: {}, movie: {}});
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

				<Status
					message={this.state.status.message}
					type={this.state.status.type}
				/>
				<RentalForm
					customer={this.state.customer}
					movie={this.state.movie}
					updateStatusCallback={this.updateStatus}
					clearRentalCallback={this.clearRental}
				/>
				<Routes
					onClickCallback={this.updateMovie}
					onClickCustomer={this.updateCustomer}
					updateStatusCallback={this.updateStatus}
				/>
      </div>
    );
  }
}

export default App;
