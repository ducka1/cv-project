import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import PracticalInfo from "./PracticalInfo";

class App extends Component {
	constructor() {
		super();

		this.state = {};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.id]: event.target.value
		});
		console.log(this.state);
	}

	handleSubmit() {
		
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

				<div className="buttons">
					<button type="button">Edit</button>
					<button onClick={this.handleSubmit} type="button">Submit</button>
				</div>
			</div>
		);
	}
}

export default App;
