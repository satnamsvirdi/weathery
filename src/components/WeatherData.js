import DetailCard from "./DetailCard";
import { MapIcon, MapPinIcon } from "./FeatherIcons";

const units = {
	windspeed: " m/s",
	pressure: " hPa",
	percent: "%",
	degree: "°",
	degreeCel: "°C",
	degreeFahr: "°F",
	km: " km",
	am: " AM",
	pm: " PM",
};

const WeatherData = ({ data, parseTime }) => {
	console.log(data);

	const iconPath = `./assets/${data.weather[0].icon}.png`;

	return (
		<>
			<div className="card-top">
				<div className="card-info-container">
					<div className="card-info-city">
						<h3 className="city-name">
							<span className="icon-wrapper">
								<MapPinIcon small />
							</span>{" "}
							{data.name}, {data.sys.country}
						</h3>
						<p className="city-location">
							<span className="icon-wrapper">
								<MapIcon small />
							</span>{" "}
							{data.coord.lon}, {data.coord.lat}
						</p>
					</div>

					<div className="card-info-weather">
						<div className="weather-icon">
							<img
								src={iconPath}
								alt="sun"
								className="weather-icon-image"
							/>
						</div>

						<div className="weather-info">
							<p className="temp">
								<strong>{data.main.temp}°C</strong>
							</p>
							<p className="desc">
								{data.weather[0].main}
								{data.weather[0].description}
							</p>
						</div>
					</div>

					<div className="card-info-feelslike">
						<p>Feels like {data.main.feels_like}°C</p>
					</div>
				</div>
			</div>

			<div className="card-bottom">
				<div className="details">
					<DetailCard
						heading="Wind Speed"
						value={data.wind.speed}
						unit={units.windspeed}
					/>
					<DetailCard
						heading="Min. Temp."
						value={data.main.temp_min}
						unit={units.degreeCel}
					/>
					<DetailCard
						heading="Visibility"
						value={data.visibility / 1000}
						unit={units.km}
					/>
					<DetailCard
						heading="Sunrise"
						value={parseTime(data.sys.sunrise)}
						unit={units.am}
					/>

					<DetailCard
						heading="Sunset"
						value={parseTime(data.sys.sunset)}
						unit={units.pm}
					/>
					<DetailCard
						heading="Max. Temp."
						value={data.main.temp_max}
						unit={units.degreeCel}
					/>

					<DetailCard
						heading="Humidity"
						value={data.main.humidity}
						unit={units.percent}
					/>
					<DetailCard
						heading="Pressure"
						value={data.main.pressure}
						unit={units.pressure}
					/>
				</div>
			</div>
		</>
	);
};

export default WeatherData;
