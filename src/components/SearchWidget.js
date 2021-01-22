import { useState } from "react";
import { SearchIcon } from "./FeatherIcons";

import "./SearchWidget.css";

const SearchWidget = ({ fetchDataByCity, loading, setLoading }) => {
  const [cityName, setCityName] = useState("delhi");

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
    <div className="search-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="searchIcon">
          <SearchIcon />
        </div>
        <input
          className="form-input"
          type="text"
          placeholder="Search city"
          onChange={handleCityChange}
          value={cityName}
        />
        <button disabled={disabled} className="btn btn-primary">
          Go
        </button>
      </form>
    </div>
  );
};

export default SearchWidget;
