import React, { Component } from "react";

class GeneralInfo extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="section">
				<label htmlFor="name">Full name:</label>
				<input onChange={this.props.onChange} id="full_name" type="text"></input>
				<label htmlFor="email">Email address:</label>
				<input onChange={this.props.onChange} id="email" type="email"></input>
				<label htmlFor="phone">Phone number:</label>
				<input onChange={this.props.onChange} id="phone" type="number"></input>
			</div>
		);
	}
}

export default GeneralInfo;
