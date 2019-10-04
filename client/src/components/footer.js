import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import FooterIcon from './footer-icon.js';

import home from '../img/home.svg';
import achievements from '../img/achievements.svg';
import account from '../img/account.svg';

class Footer extends React.Component {
	render() {
		return <div className="footer">
			<Link to="/">
				<FooterIcon filePath={home}/>
			</Link>
			<Link to="/achievements">
				<FooterIcon filePath={achievements}/>
			</Link>
			<Link to="/account">
				<FooterIcon filePath={account}/>
			</Link>
		</div>
	}
}
export default Footer