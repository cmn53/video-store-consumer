import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Customers from './Customers';
import Library from './Library';
import SearchForm from './SearchForm';

const Routes = () => (
	<Router>
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/search">Search</Link>
				</li>
				<li>
					<Link to="/library">Library</Link>
				</li>
				<li>
					<Link to="/customers">Customers</Link>
				</li>
			</ul>

			<hr />

			<Route exact path="/" component={Home} />
			<Route
				path="/search"
				component={ (props) => <SearchForm onSearchCallback={onSearch} />}
			/>
			<Route path="/library" component={Library} />
			<Route path="/customers" component={Customers} />
		</div>
	</Router>
);

const Home = () => {
	return (
		<div>
			<h1>Welcome</h1>
		</div>
	);
}

const onSearch = (query) => {
	console.log("IN THE SEARCH");
}

export default Routes;
