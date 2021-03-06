import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import '../../fonts/fonts.scss';
import './App.css';
import Header from '../Header/Header';
import Winners from '../Winners/Winners';


class App extends Component {
	render() {
		return (
			<>
				<Router>
					<Header/>
					<Switch>
						<Route path='/' />
					</Switch>
					<Winners/>
				</Router>
				
			</>
		);
	}
}

export default App;

