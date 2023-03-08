import React, { Component } from "react";

class GeneralInfo extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			email: '',
			phone: '',
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	render() {
		return (
			<div className="section">
				<label htmlFor="name">Full name:</label>
				<input onChange={this.handleChange} id="name" type="text"></input>
				<label htmlFor="email">Email address:</label>
				<input onChange={this.handleChange} id="email" type="email"></input>
				<label htmlFor="phone">Phone number:</label>
				<input onChange={this.handleChange} id="phone" type="number"></input>
			</div>
		);
	}
}

export default GeneralInfo;
