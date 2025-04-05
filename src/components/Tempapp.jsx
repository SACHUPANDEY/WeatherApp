import React, { useState } from "react";
import './TempApp.css';

const Tempapp = () => {
  const [city, setCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState('');

  const API_KEY = '0d2b8223d03e4dbbf071e0c203164e9e'; // Replace with your actual key

  const handleSearch = async () => {
    if (city.trim() === '') {
      setWeatherInfo('Please enter a city, state, or country');
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        setWeatherInfo('City not found or something went wrong.');
        return;
      }

      const data = await response.json();
      const temp = data.main.temp;
      const description = data.weather[0].description;
      const name = data.name;
      const country = data.sys.country;

      setWeatherInfo(`🌡️ ${temp}°C in ${name}, ${country} — ${description}`);
    } catch (error) {
      setWeatherInfo('Failed to fetch weather data.');
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="heading">Weather Update Site</h1>
        <input
          type="text"
          placeholder="Enter city, state, or world"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="inputBox"
        />
        <button onClick={handleSearch} className="searchButton">
          Search
        </button>
        <p className="resultText">{weatherInfo}</p>
      </div>
    </>
  );
};

export default Tempapp;
