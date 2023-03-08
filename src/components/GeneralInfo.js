import React, { Component } from "react";

class GeneralInfo extends Component {
	render() {
		return (
			<div className="section">
				<label htmlFor="name">Full name:</label>
				<input id="name" type="text"></input>
				<label htmlFor="email">Email address:</label>
				<input id="email" type="email"></input>
				<label htmlFor="phone">Phone number:</label>
				<input id="phone" type="number"></input>
			</div>
		);
	}
}

export default GeneralInfo;
