import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Country from "./Country/Country";
import AddedCountry from "./components/AddedCountry/AddedCountry";

function App() {
  const [countries, setCountries] = useState([]);
  const [addedCountries, setAddedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (country) => {
    const newAddedCountries = [...addedCountries, country];
    setAddedCountries(newAddedCountries);
  };

  return (
    <div className="App">
      <h1>Country List</h1>
      <AddedCountry added={addedCountries}></AddedCountry>
      {countries.map((country) => (
        <Country
          country={country}
          handleClick={() => {
            handleClick(country);
          }}
          key={country.alpha3Code}
        ></Country>
      ))}
    </div>
  );
}

export default App;
