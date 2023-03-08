import React, { Component } from "react";
import EducationInfo from "./EducationInfo";
import GeneralInfo from "./GeneralInfo";
import PracticalInfo from "./PracticalInfo";

class App extends Component {
	render() {
		return (
			<div>
				<GeneralInfo/>
				<EducationInfo/>
				<PracticalInfo/>
			</div>
		);
	}
}

export default App;
