// components/CountryInfo.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryInfo = ({ country }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&APPID=${apiKey}`
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Error fetching weather data.');
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [country]);

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital[0]}</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      <h2>Languages</h2>
      <ul>
          {Object.values(country.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      <img src={country.flags.png} alt={country.name.common} />

      {loading && <p>Loading weather data...</p>}
      {error && <p>{error}</p>}
      
      {weatherData && (
        <div>
          <h1>Weather in {country.capital[0]}</h1>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <img
            src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt="Weather Icon"
            style={{ width: '100px', height: '100px' }}
          />
           <p>Wind:  {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default CountryInfo;
