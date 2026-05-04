/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Headers from "./components/Header";
import Search from "./components/Search";
import Weathercard from "./components/WeatherCard";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [weatherDetails, setWeatherDetails] = useState(null);

  return (
    <div className='app'>
      <div className="app-container">
        <Headers />
        <Search setWeatherDetails={setWeatherDetails} />
        {weatherDetails && <Weathercard data={weatherDetails} />}
        <Footer />
      </div>
    </div>
  )
}

export default App
