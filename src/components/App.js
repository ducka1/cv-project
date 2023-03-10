import React, { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import PracticalInfo from "./PracticalInfo";
import RenderCV from "./RenderCV";

function App() {
  const [info, setInfo] = useState({
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
  });

	const handleChange = (event) => {
    setInfo({
      [event.target.id]: event.target.value
    });
	}

  return (
    <div>
      <GeneralInfo onChange={handleChange}/>
      <br></br>
      <EducationInfo onChange={handleChange}/>
      <br></br>
      <PracticalInfo onChange={handleChange}/>
      <br></br>
      <RenderCV state={info}/>
    </div>
  );
}

export default App;
