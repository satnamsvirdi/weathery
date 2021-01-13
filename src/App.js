import { useState } from "react";
function App() {
  const [weatherData, setWeatherData] = useState("");

  const fetchDataByCity = async (cityName) => {
    const apiKey = "7b130bb6b2e00f735a3023b3b5e375bb";
    const fetchURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    console.log("FETCH CALLED!");
    const fetchedData = await fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));

    setWeatherData(fetchedData);
  };

  const searchCity = (cityName) => {
    fetchDataByCity(cityName);
  };

  return (
    <div className="App">
      <SearchWidget searchCity={searchCity} />
      <WeatherCard weatherData={weatherData} />
    </div>
  );
}

const SearchWidget = ({ searchCity }) => {
  const [cityName, setCityName] = useState("New York");
  const handleCityChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCity(cityName);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type location here"
          onChange={handleCityChange}
          value={cityName}
        />
        <button>Search</button>
      </form>
    </>
  );
};

const WeatherCard = ({ weatherData }) => {
  console.log(weatherData);

  // TODO: only show data when weatherData.cod is 200

  return (
    <>
      <h4>{weatherData ? "Loaded" : "Loading..."}</h4>
      <div>
        {weatherData ? (
          <div>
            <p>{weatherData ? weatherData?.name : "loading..."}</p>
            <p>{weatherData ? weatherData.coord?.lat : " loading..."}</p>
            <p>{weatherData ? weatherData.coord?.lon : " loading..."}</p>
            <p>{weatherData ? weatherData.main?.feels_like : " loading..."}</p>
            <p>{weatherData ? weatherData.main?.temp : " loading..."}</p>
            <p>{weatherData ? weatherData.main?.temp_max : " loading..."}</p>
            <p>{weatherData ? weatherData.main?.temp_min : " loading..."}</p>
            <p>{weatherData ? weatherData.main?.pressure : " loading..."}</p>
            <p>{weatherData ? weatherData.main?.humidity : " loading..."}</p>
            <p>{weatherData ? weatherData.sys?.country : " loading..."}</p>
            <p>{weatherData ? weatherData.sys?.sunrise : " loading..."}</p>
            <p>{weatherData ? weatherData.sys?.sunset : " loading..."}</p>
            <p>{weatherData ? weatherData?.timezone : " loading..."}</p>
            <p>{weatherData ? weatherData?.visibility : " loading..."}</p>
            <p>
              {weatherData
                ? weatherData.weather[0]?.description
                : " loading..."}
            </p>
            <p>{weatherData ? weatherData.weather[0]?.main : " loading..."}</p>
            <p>{weatherData ? weatherData.weather[0]?.icon : " loading..."}</p>
            <p>{weatherData ? weatherData.wind?.degree : " loading..."}</p>
            <p>{weatherData ? weatherData.wind?.speed : " loading..."}</p>
          </div>
        ) : (
          "No weather data yet..."
        )}
      </div>
    </>
  );
};

export default App;
