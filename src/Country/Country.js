import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, region, flag, population } = props.country;
  const handleClick = props.handleClick;

  return (
    <div className="single-country">
      <img src={flag} alt="" />
      <div className="country-info">
        <h2>Name: {name}</h2>
        <h3>Region: {region}</h3>
        <h3>Population: {population}</h3>
        <button onClick={handleClick}>Add Country</button>
      </div>
    </div>
  );
};

export default Country;
