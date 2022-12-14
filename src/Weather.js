import React, { useState } from "react";

import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function showData(responce) {
    console.log(responce.data);
    setWeatherData({
      ready: true,
      city: responce.data.name,
      temperature: responce.data.main.temp,
      coordinates: responce.data.coord,
      date: new Date(responce.data.dt * 1000),
      description: responce.data.weather[0].description,
      humidity: responce.data.main.humidity,
      wind: responce.data.wind.speed,
      icon: responce.data.weather[0].icon,
    });
  }
  function changeCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiKey = "fa08fdd055e22cb26592fb746ab2d10d";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}
		&appid=${apiKey}&units=metric`;
    axios.get(url).then(showData);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <span className="row">
          <form className="col-7" onSubmit={handleSubmit}>
            <input
              type="search"
              id="search-city"
              className="search form-control"
              onChange={changeCity}
            />
            <button type="submit" className="col=3 search btn btn-primary">
              Search
            </button>
          </form>
        </span>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coord={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
