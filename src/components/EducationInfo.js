import React, { Component } from "react";

class EducationInfo extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="section">
				<label htmlFor="name">School name:</label>
				<input onChange={this.props.onChange} id="school_name" type="text"></input>
				<label htmlFor="title">Title of study:</label>
				<input onChange={this.props.onChange} id="study_title" type="text"></input>
				<label htmlFor="date">Date of study:</label>
				<input onChange={this.props.onChange} id="date" type="date"></input>
			</div>
		);
	}
}

export default EducationInfo;
