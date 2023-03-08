import React, { Component } from "react";
import Buttons from "./Buttons";
import EducationInfo from "./EducationInfo";
import GeneralInfo from "./GeneralInfo";
import PracticalInfo from "./PracticalInfo";

class App extends Component {
	render() {
		return (
			<div>
				<GeneralInfo/>
				<br></br>
				<EducationInfo/>
				<br></br>
				<PracticalInfo/>
				<br></br>
				<Buttons/>
			</div>
		);
	}
}

export default App;
