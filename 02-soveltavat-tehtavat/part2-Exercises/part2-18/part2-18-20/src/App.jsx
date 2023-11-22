import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryInfo from './components/countryInfo';
const App = () => {
  const [countryName, setCountryName] = useState(''); //name is taken from search bar
  const [countryData, setCountryData] = useState([]); //data taken from api/axious
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [message, setMessage] = useState(null); //write error message ourself

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
  setSelectedCountry(null);
}

const handleShowButton = (country)=>{
  console.log(country);
return(
setSelectedCountry(country)
)}

  return (
    <div>
      Find countries: <input
        type="text"
        value={countryName}
        onChange={handleChange}
        />

      {message && <p>{message}</p>} 

      {countryData.length > 1 && countryData.length <= 10 && (
        <div>
          {countryData.map((country, index) => (
            <div key={index}style={{ display: 'flex', alignItems: 'center' }}>
              <p>{country.name.common}</p>
              <button onClick={()=>handleShowButton(country)}>show</button>
            </div>
          ))}
        </div>
        )
      }

      {countryData.length === 1 && (
        <CountryInfo country= {countryData[0]} />)
      }

      {selectedCountry && (<CountryInfo country={selectedCountry}/>)}

    </div>
  );
};

export default App;
