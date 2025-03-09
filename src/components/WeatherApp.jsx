import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const API_KEY = "0cf161c37a55bbda470954d39e9fb6cb";
  const CITY = "Patna"; // Change to your city

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="p-6 max-w-sm mx-auto bg-gray-900 rounded-xl shadow-md text-center">
      {weather ? (
        <>
          <h2 className="text-2xl font-bold">{weather.name}</h2>
          <p className="text-lg">{weather.weather[0].description}</p>
          <p className="text-4xl font-bold">{weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} m/s</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherApp;
