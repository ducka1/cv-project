import React from "react";

function GeneralInfo(props) {
  return (
    <div className="section">
      <label htmlFor="name">Full name:</label>
      <input onChange={props.onChange} id="full_name" type="text"></input>
      <label htmlFor="email">Email address:</label>
      <input onChange={props.onChange} id="email" type="email"></input>
      <label htmlFor="phone">Phone number:</label>
      <input onChange={props.onChange} id="phone" type="number"></input>
    </div>
  );
}

export default GeneralInfo;
