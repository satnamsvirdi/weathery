import { useState, useEffect } from "react";
import "./App.css";
import { Helmet } from "react-helmet";

import SearchWidget from "./components/SearchWidget";
import Logo from "./components/Logo";
import WeatherContainer from "./components/WeatherContainer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Footer from "./components/Footer";

function App() {
  const [weatherData, setWeatherData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkTheme, setDarkTheme] = useState(getDefaultTheme());

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

  const handleThemeSwitcher = () => {
    // console.log("Current Theme: ", darkTheme);
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkTheme));
  }, [darkTheme]);

  function getDefaultTheme() {
    const selectedTheme = JSON.parse(localStorage.getItem("dark"));
    return selectedTheme || false;
  }

  return (
    <div>
      <Helmet>
        <body className={darkTheme ? "dark-theme" : "light-theme"} />
      </Helmet>

      <Header>
        <Logo darkTheme={darkTheme} />
        <SearchWidget
          fetchDataByCity={fetchDataByCity}
          loading={loading}
          setLoading={setLoading}
        />
        <ThemeSwitcher
          handleThemeSwitcher={handleThemeSwitcher}
          darkTheme={darkTheme}
        />
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
