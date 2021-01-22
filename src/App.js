import { useState } from "react";
import "./App.css";

import SearchWidget from "./components/SearchWidget";
import Logo from "./components/Logo";
import WeatherContainer from "./components/WeatherContainer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Footer from "./components/Footer";

function App() {
  const [weatherData, setWeatherData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchDataByCity = async (cityName) => {
    const apiKey = "7b130bb6b2e00f735a3023b3b5e375bb";
    const fetchURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    // reset state data before fetch
    setWeatherData("");
    setError("");

    const fetchedData = await fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log("ERROR: ", err));

    if (fetchedData) {
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
    }
  };

  return (
    <div className="app">
      <Header>
        <Logo />
        <SearchWidget
          fetchDataByCity={fetchDataByCity}
          loading={loading}
          setLoading={setLoading}
        />
        <ThemeSwitcher />
      </Header>
      {error ? (
        <WeatherContainer error={error} />
      ) : (
        <WeatherContainer weatherData={weatherData} loading={loading} />
      )}
      <Footer />
    </div>
  );
}

const Header = ({ children }) => {
  return <header>{children}</header>;
};

export default App;
