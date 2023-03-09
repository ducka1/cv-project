import React, { Component } from "react";

class PracticalInfo extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="section">
				<label htmlFor="name">Company name:</label>
				<input onChange={this.props.onChange} id="company_name" type="text"></input>
				<label htmlFor="title">Position title:</label>
				<input onChange={this.props.onChange} id="position_title" type="text"></input>
				<label htmlFor="tasks">Main tasks:</label>
				<input onChange={this.props.onChange} id="tasks" type="text"></input>
				<label htmlFor="tasks">Date from:</label>
				<input onChange={this.props.onChange} id="date_from" type="date"></input>
				<label htmlFor="tasks">Date until:</label>
				<input onChange={this.props.onChange} id="date_until" type="date"></input>
			</div>
		);
	}
}

export default PracticalInfo;
