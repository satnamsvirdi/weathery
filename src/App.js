import { useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchDataByCity = async (cityName) => {
    const apiKey = "7b130bb6b2e00f735a3023b3b5e375bb";
    const fetchURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    // reset state data before fetch
    setWeatherData("");
    setError("");

    const fetchedData = await fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log("ERROR: ", err));

    if (fetchedData.cod === 200) {
      setWeatherData(fetchedData);
      setError("");
      setLoading(false);
    } else {
      setError({
        cod: fetchedData.cod,
        message: fetchedData.message,
      });
      setLoading(false);
      // console.log(`${fetchedData.cod}: ${fetchedData.message}`);
    }
  };

  return (
    <div className="App">
      <SearchWidget
        fetchDataByCity={fetchDataByCity}
        loading={loading}
        setLoading={setLoading}
      />
      {error ? (
        <WeatherCard error={error} />
      ) : (
        <WeatherCard weatherData={weatherData} loading={loading} />
      )}
    </div>
  );
}

// //

const SearchWidget = ({ fetchDataByCity, loading, setLoading }) => {
  const [cityName, setCityName] = useState("");

  let disabled = loading ? "disabled" : "";

  const handleCityChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (cityName.trim()) {
      fetchDataByCity(cityName);
    } else {
      alert("Please type city name in the search box");
      setLoading(false);
    }
    setCityName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type location here, e.g. New York"
          onChange={handleCityChange}
          value={cityName}
        />
        <button disabled={disabled}>Search</button>
      </form>
    </>
  );
};

// //

const WeatherCard = ({ weatherData, error, loading }) => {
  let cardData;
  if (weatherData) {
    cardData = <div>has data</div>;
  } else {
    if (error) {
      cardData = <p>{`${error.cod}: ${error.message}`}</p>;
    } else {
      cardData = <p>no data, no errors</p>;
    }
  }

  return (
    <>
      <h3>Card Data </h3>
      <div>{loading ? "loading..." : cardData}</div>
      <section className="hidden">
        <h4>Test DIV below</h4>
        <div>
          {weatherData ? (
            <div>
              <p>{weatherData ? weatherData?.name : "loading..."}</p>
              <p>{weatherData ? weatherData.coord?.lat : " loading..."}</p>
              <p>{weatherData ? weatherData.coord?.lon : " loading..."}</p>
              <p>
                {weatherData ? weatherData.main?.feels_like : " loading..."}
              </p>
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
              <p>
                {weatherData ? weatherData.weather[0]?.main : " loading..."}
              </p>
              <p>
                {weatherData ? weatherData.weather[0]?.icon : " loading..."}
              </p>
              <p>{weatherData ? weatherData.wind?.degree : " loading..."}</p>
              <p>{weatherData ? weatherData.wind?.speed : " loading..."}</p>
            </div>
          ) : (
            "No weather data yet..."
          )}
        </div>
      </section>
    </>
  );
};

export default App;
