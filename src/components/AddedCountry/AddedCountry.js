import React from "react";

const AddedCountry = (props) => {
  const addedCountries = props.added;

  const totalPopulation = addedCountries.reduce(
    (sum, country) => sum + country.population,
    0
  );

  return (
    <div>
      <h3>Country Added: {addedCountries.length}</h3>
      <h5>Total Population: {totalPopulation}</h5>
    </div>
  );
};

export default AddedCountry;
