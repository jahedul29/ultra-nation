import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(countries);

  return (
    <div className="App">
      <ul>
        {countries.map((country) => (
          <li>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
