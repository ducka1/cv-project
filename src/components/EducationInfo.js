import React, { Component } from "react";

class EducationInfo extends Component {
	render() {
		return (
			<div className="section">
				<label htmlFor="name">School name:</label>
				<input id="name" type="text"></input>
				<label htmlFor="title">Title of study:</label>
				<input id="title" type="text"></input>
				<label htmlFor="date">Date of study:</label>
				<input id="date" type="date"></input>
			</div>
		);
	}
}

export default EducationInfo;
