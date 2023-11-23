import React, { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [weatherData, setWeatherData] = useState(null);
 const [errorMessage, setErrorMessage] = useState(null);
 const [loading, setLoading] = useState(true)
 const[city, setCity] = useState('')
 
  const GetApiData = async() =>{
    try{
      const response =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7015c84952e0758fccf0b3d0bd59c321`);
  
      setWeatherData(response.data)
      console.log(response)
      setLoading(false);
      setErrorMessage(null)
    }
    catch(error){
      const errorMessage =
      error.response?.data?.message || "An error occurred while fetching weather data.";

    setErrorMessage(errorMessage);
      setLoading(false);
      setWeatherData(null)
    }
  }

useEffect(()=>{
  if(city !== ''){
    GetApiData();
  }

}, [city])

const handleInput = (event)=>{

setCity(event.target.value);
console.log(city)
}

//if data is still not loaded and data is empty array.post this else post other return. If we dont add loading, it will try to access data from empty array and give error
// if(loading){
//  <p>Loading... </p>
// }
return(
  <div>

    <p>Weather of: 
      <input type="text" value={city} onChange={handleInput} />
      </p>
      {errorMessage && <p>{errorMessage}</p>} 
    {weatherData &&(
      <div>
      <h1>Weather of {city}</h1>
      <p>Temp: {(weatherData.main.temp - 273.15).toFixed(2)}°Celcius</p>
      <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
      <p>wind {weatherData.wind.speed} m/s</p>
      </div>
      )}
   
  


  </div>
  
)
}

export default App
