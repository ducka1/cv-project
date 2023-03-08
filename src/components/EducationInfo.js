import React, { Component } from "react";

class EducationInfo extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			title: '',
			date: '',
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
				<label htmlFor="name">School name:</label>
				<input onChange={this.handleChange} id="name" type="text"></input>
				<label htmlFor="title">Title of study:</label>
				<input onChange={this.handleChange} id="title" type="text"></input>
				<label htmlFor="date">Date of study:</label>
				<input onChange={this.handleChange} id="date" type="date"></input>
			</div>
		);
	}
}

export default EducationInfo;
