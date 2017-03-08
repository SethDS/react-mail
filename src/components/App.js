import React from "react";
import {Link} from 'react-router';
import Header from "./Header";

export default class App extends React.Component {
	render() {
		return (
			<div>
				<img
					alt="React Logo"
					src="./assets/react-logo.svg"
				/>
				<Header>
					<Link to="/" p><h1 class="link">rMail</h1></Link>
					<Link to="inbox"><span>Inbox</span></Link>
					<Link to="draft"><span>Draft</span></Link>
					<Link to="contacts"><span>Contacts</span></Link>
				</Header>
				{this.props.children}
			</div>
		);
	}
}
