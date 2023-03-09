import React, { Component } from "react";

class RenderCV extends Component {
	render() {
		const state = this.props.state

		return (
			<div className="cv">
				<div className="general_info">
					<h1>{state.full_name}</h1>
					<h3>Email adress: {state.email}</h3>
					<h3>Phone number: {state.phone}</h3>
				</div>
				<br></br>
				<div className="education_info">
					<h1>Education</h1>
					<h2>{state.school_name}</h2>
					<h3>{state.study_title}</h3>
					<h3>Date of study: {state.date}</h3>
				</div>
				<br></br>
				<div className="practical_info">
					<h1>Career</h1>
					<h2>{state.company_name}</h2>
					<h2>{state.position_title}</h2>
					<h3>Main tasks: {state.tasks}</h3>
					<h3>From: {state.date_from}</h3>
					<h3>Until: {state.date_until}</h3>
				</div>
			</div>
		);
	}
}

export default RenderCV;
