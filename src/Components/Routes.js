import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Customers from './Customers';
import Library from './Library';
import Search from './Search';
import './RentalForm.css';

const getPath = () => {
  let pathName = window.location.pathname;
  return pathName;
}

const Routes = (props) => (
	<Router>
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li className={getPath()==='/search'?'selected':''}>
					<Link to="/search">Search</Link>
				</li>
				<li className={getPath()==='/library'?'selected':''}>
					<Link to="/library">Library</Link>
				</li>
				<li className={getPath()==='/customers'?'selected':''}>
					<Link to="/customers">Customers</Link>
				</li>
			</ul>

			<hr />

			<Route exact path="/" component={Home} />
			<Route path="/search" render={() => <Search {...props}/>} />
			<Route path="/library" render={() => <Library {...props}/>} />
			<Route path="/customers" render={() => <Customers {...props}/>} />
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
