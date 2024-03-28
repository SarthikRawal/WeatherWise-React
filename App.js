import "./App.css";
import { useState } from "react";
const options = { method: 'GET', headers: { accept: 'application/json' } };

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([])

  const searchPressed = () => {
    fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${search}&apikey=44f2Sq9l7amHslgsKuWiyJxtyY4j69ny`, options)

      .then(response => response.json())
      .then(response => setWeather(response))
      .catch(err => console.error(err));
  };
  return (
    <div className="App">
      <header className="App-header">

        {/* HEADER */}
        <div id="heading">
          <h1>Weather App</h1>
        </div>

        {/* Search Box */}
        <div id="input">
          <input
            type="text"
            placeholder="Enter City.."
            onClick={(e) => setSearch(e.target.value)}
          ></input>
          <button onClick={searchPressed}>Search</button>
        </div>
        {typeof weather.data != "undefined" ?

          <div>

            {/* Location  */}
            <p>{weather.location.name.split(',')[0].trim()}</p>

            {/* Temperature  */}

            <p>{weather.data.values.temperature}°C</p>

            {/* Precipitation */}
            <p>Precipitation: {weather.data.values.precipitationProbability}%</p>
          </div>
          :
          ''
        }
      </header>
    </div>

  );
}

export default App;