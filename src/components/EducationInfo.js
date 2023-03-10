import React from "react";

function EducationInfo(props) {
  return (
    <div className="section">
      <label htmlFor="name">School name:</label>
      <input onChange={props.onChange} id="school_name" type="text"></input>
      <label htmlFor="title">Title of study:</label>
      <input onChange={props.onChange} id="study_title" type="text"></input>
      <label htmlFor="date">Date of study:</label>
      <input onChange={props.onChange} id="date" type="date"></input>
    </div>
  );
}

export default EducationInfo;
