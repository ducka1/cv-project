import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import PracticalInfo from "./PracticalInfo";
import RenderCV from "./RenderCV";

class App extends Component {
	constructor() {
		super();

		this.state = {
			full_name: "",
			email: "",
			phone: "",
			school_name: "",
			study_tile: "",
			date: "",
			company_name: "",
			position_title: "",
			tasks: "",
			date_from: "",
			date_until: "",
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	render() {
		return (
			<div>
				<GeneralInfo onChange={this.handleChange}/>
				<br></br>
				<EducationInfo onChange={this.handleChange}/>
				<br></br>
				<PracticalInfo onChange={this.handleChange}/>
				<br></br>
				<RenderCV state={this.state}/>
			</div>
		);
	}
}

export default App;
