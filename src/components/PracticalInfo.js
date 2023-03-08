import React, { Component } from "react";

class PracticalInfo extends Component {
	render() {
		return (
			<div className="section">
				<label htmlFor="name">Company name:</label>
				<input id="name" type="text"></input>
				<label htmlFor="title">Position title:</label>
				<input id="title" type="text"></input>
				<label htmlFor="tasks">Main tasks:</label>
				<input id="tasks" type="text"></input>
				<label htmlFor="tasks">Date from:</label>
				<input id="date-from" type="date"></input>
				<label htmlFor="tasks">Date until:</label>
				<input id="date-until" type="date"></input>
			</div>
		);
	}
}

export default PracticalInfo;
