/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Weathericon from '../assets/weather-cloudy.png'

const Weathercard = ({ data }) => {
  const [weather, setWeather] = useState(null);
  return (
    <div className="weather-section">
      <div className="weather-card">
        <div className="weather-temp-c">
          {parseInt(data.current.temp_c)}°C
        </div>
        <div className="weather-info">
          <span>
            {data.current.humidity} % Humidity
          </span>
          <span>
            {data.current.cloud} % Cloud
          </span>
        </div>
        <div className="weather-place">
          {data.location.name}, {data.location.region} ,{data.location.country}
        </div>
        <div className="weather-avatar">
          <img src={Weathericon} alt="Weather Icon" />
        </div>
      </div>
    </div>
  )
}

export default Weathercard;
