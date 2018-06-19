import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Customers from './Customers';
import Library from './Library';
import Search from './Search';

const Routes = (props) => (
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
			<Route path="/search" component={Search} />
			<Route path="/library" render={(props) => <Library {...props} newProp={props}/>} />
			<Route path="/customers" render={(props) => <Customers onClickCallback={props.updateCustomerCallback}/>} />
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

export default Routes;
