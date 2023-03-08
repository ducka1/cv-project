import React, { Component } from "react";

class PracticalInfo extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			title: '',
			tasks: '',
			dateFrom: '',
			dateUntil: '',
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
				<label htmlFor="name">Company name:</label>
				<input onChange={this.handleChange} id="name" type="text"></input>
				<label htmlFor="title">Position title:</label>
				<input onChange={this.handleChange} id="title" type="text"></input>
				<label htmlFor="tasks">Main tasks:</label>
				<input onChange={this.handleChange} id="tasks" type="text"></input>
				<label htmlFor="tasks">Date from:</label>
				<input onChange={this.handleChange} id="dateFrom" type="date"></input>
				<label htmlFor="tasks">Date until:</label>
				<input onChange={this.handleChange} id="dateUntil" type="date"></input>
			</div>
		);
	}
}

export default PracticalInfo;
