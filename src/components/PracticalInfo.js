import React from "react";

function PracticalInfo(props) {
  return (
    <div className="section">
      <label htmlFor="name">Company name:</label>
      <input onChange={props.onChange} id="company_name" type="text"></input>
      <label htmlFor="title">Position title:</label>
      <input onChange={props.onChange} id="position_title" type="text"></input>
      <label htmlFor="tasks">Main tasks:</label>
      <input onChange={props.onChange} id="tasks" type="text"></input>
      <label htmlFor="tasks">Date from:</label>
      <input onChange={props.onChange} id="date_from" type="date"></input>
      <label htmlFor="tasks">Date until:</label>
      <input onChange={props.onChange} id="date_until" type="date"></input>
    </div>
  );
}

export default PracticalInfo;
