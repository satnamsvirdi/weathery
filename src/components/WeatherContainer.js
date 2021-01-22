import WeatherData from "./WeatherData";
import Error from "./Error";
import Loading from "./Loading";
import InitialScreen from "./InitialScreen";

const WeatherContainer = ({ weatherData, error, loading }) => {
	let cardData;

	// console.log(weatherData);
	const switchToTweleveHours = (hours) => {
		if (hours > 12) {
			return hours - 12;
		} else {
			return hours;
		}
	};

	const parseTime = (timestamp) => {
		const date = new Date(timestamp * 1000);
		const hours = date.getHours();
		const mins = date.getMinutes();

		function checkAndAddPrefixZero(number) {
			if (number < 10) {
				return `0${number}`;
			} else {
				return number;
			}
		}

		let switchHours = switchToTweleveHours(hours);
		let prefixedHours = checkAndAddPrefixZero(switchHours);
		let prefixedMins = checkAndAddPrefixZero(mins);

		const time = `${prefixedHours}:${prefixedMins}`;

		return time;
	};

	if (weatherData) {
		cardData = <WeatherData data={weatherData} parseTime={parseTime} />;
	} else {
		if (error) {
			cardData = <Error error={error} />;
		} else {
			cardData = <InitialScreen />;
		}
	}

	return (
		<div className="card-container">
			<div className="card">{loading ? <Loading /> : cardData}</div>
		</div>
	);
};

export default WeatherContainer;
