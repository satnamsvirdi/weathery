const WeatherContainer = ({ weatherData, error, loading }) => {
	let cardData;

	// console.log(weatherData);

	const parseTime = (timestamp) => {
		const switchToTweleveHours = (hours) => {
			if (hours > 12) {
				return hours - 12;
			} else {
				return hours;
			}
		};

		const date = new Date(timestamp * 1000);
		const hours = date.getHours();
		const mins = date.getMinutes();

		// switchTweleveHours(hours);

		const time = `${switchToTweleveHours(hours)}:${mins}`;

		return time;
	};

	if (weatherData) {
		cardData = (
			<>
				<div className="card-top">
					<div className="card-info-container">
						<div className="card-info-city">
							<h4 className="city-name">
								{weatherData.name}, {weatherData.sys.country}
							</h4>
							<p className="city-location">
								{weatherData.coord.lon} {weatherData.coord.lat}
							</p>
						</div>

						<div className="card-info-weather">
							<div className="weather-icon">
								<img
									src="./assets/sun.png"
									alt="sun"
									className="weather-icon-image"
								/>
							</div>

							<div className="weather-info">
								<p className="temp">
									<strong>{weatherData.main.temp}°C</strong>
								</p>
								<p className="desc">
									{weatherData.weather[0].main}
								</p>
							</div>
						</div>

						<div className="card-info-feelslike">
							<p>Feels like {weatherData.main.feels_like}°C</p>
						</div>
					</div>
				</div>

				<div className="card-bottom">
					<div className="details">
						<div className="col">
							<div className="col-icon">i</div>
							<div className="col-data">
								<h5 className="data-heading">Wind Speed </h5>
								<p className="data-body">
									{weatherData.wind.speed} m/s
								</p>
							</div>
						</div>

						<div className="col">
							<div className="col-icon">i</div>
							<div className="col-data">
								<h5 className="data-heading">Min. Temp.</h5>
								<p className="data-body">
									{weatherData.main.temp_min}°C
								</p>
							</div>
						</div>

						<div className="col">
							<div className="col-icon">i</div>
							<div className="col-data">
								<h5 className="data-heading">Visibility</h5>
								<p className="data-body">
									{weatherData.visibility / 1000} km
								</p>
							</div>
						</div>

						<div className="col">
							<div className="col-icon">i</div>
							<div className="col-data">
								<h5 className="data-heading">Sunrise</h5>
								<p className="data-body">
									{parseTime(weatherData.sys.sunrise)} AM
								</p>
							</div>
						</div>

						<div className="col">
							<div className="col-icon">i</div>
							<div className="col-data">
								<h5 className="data-heading">Sunset</h5>
								<p className="data-body">
									{parseTime(weatherData.sys.sunset)} PM
								</p>
							</div>
						</div>

						<div className="col">
							<div className="col-icon">i</div>
							<div className="col-data">
								<h5 className="data-heading">Max. Temp.</h5>
								<p className="data-body">
									{weatherData.main.temp_max}°C
								</p>
							</div>
						</div>

						<div className="col">
							<div className="col-icon">i</div>
							<div className="col-data">
								<h5 className="data-heading">Humidity</h5>
								<p className="data-body">
									{weatherData.main.humidity}%
								</p>
							</div>
						</div>

						<div className="col">
							<div className="col-icon">i</div>
							<div className="col-data">
								<h5 className="data-heading">Pressure</h5>
								<p className="data-body">
									{weatherData.main.pressure} hPa
								</p>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	} else {
		if (error) {
			cardData = <p>{`${error.cod}: ${error.message}`}</p>;
		} else {
			cardData = <div className="card">No data, no error</div>;
		}
	}

	return (
		<div className="card-container">
			<div className="card">{loading ? "loading..." : cardData}</div>
		</div>
	);
};

export default WeatherContainer;
