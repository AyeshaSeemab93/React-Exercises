// CountryInfo.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [countryName, setCountryName] = useState('');
  const [countryData, setCountryData] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (countryName) {
      axios
        .get(`https://restcountries.com/v3.1/name/${countryName}`)
        .then((response) => {
          setCountryData(response.data);
          // Check the number of countries that match the query
          if (response.data.length === 0) {
            setMessage('No matching countries found.');
          } else if (response.data.length > 10) {
            setMessage('Too many countries, specify another filter.');
          } else {
            setMessage(''); // Reset the message if there are 10 or fewer matches
          }
        })
        .catch((error) => {
          console.error('Error fetching country data:', error);
          setMessage('Error fetching country data.');
        });
    }
  }, [countryName]);
const handleChange = (event) =>{
  setCountryName(event.target.value)
}
  return (
    <div>
      find countries: 
      <input
        type="text"
        value={countryName}
        onChange={handleChange}
      />
      {message && <p>{message}</p>}

      {countryData.length > 1 && countryData.length <= 10 && (
        <div>
          {countryData.map((country, index) => (
            <div key={index}>
              <p>{country.name.common}</p>
            </div>
          ))}
        </div>
      )}
      
      {countryData.length === 1 && (
        <div>
          <h2>{countryData[0].name.common}</h2>
          <p>Capital: {countryData[0].capital[0]}</p>
          <p>Population: {countryData[0].population}</p>
          <p>Region: {countryData[0].region}</p>
          <p>Subregion: {countryData[0].subregion}</p>
          <p>Language: {countryData[0].languages[Object.keys(countryData[0].languages)[0]]}</p>
          <img src={countryData[0].flags.png} />
        </div>
      )}
    </div>
  );
};

export default App;
