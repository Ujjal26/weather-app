/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Headers from "./components/header";
import Search from "./components/search";
import Weathercard from "./components/Weathercard";
import Footer from "./components/Footer";
import "./app.css";

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
