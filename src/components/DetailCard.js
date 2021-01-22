import "./DetailCard.css";
import {
	ArrowUpIcon,
	ArrowDownIcon,
	TrendingUpIcon,
	TrendingDownIcon,
	DropletIcon,
	EyeIcon,
	SunsetIcon,
	SunriseIcon,
	ThermometerIcon,
	WindIcon,
	NavigationAltIcon,
	CompassIcon,
} from "./FeatherIcons";

const icons = {
	"Wind Speed": <WindIcon />,
	"Wind Degree": <NavigationAltIcon />,
	"Min. Temp.": <TrendingDownIcon />,
	"Max. Temp.": <TrendingUpIcon />,
	Visibility: <EyeIcon />,
	Humidity: <DropletIcon />,
	Pressure: <CompassIcon />,
	Sunrise: <SunriseIcon />,
	Sunset: <SunsetIcon />,
};

const DetailCard = ({ heading, value, unit = "" }) => {
	const icon = icons[heading];

	return (
		<>
			<div className="col">
				<div className="col-icon">{icon ? icon : "-"}</div>
				<div className="col-data">
					<h5 className="data-heading">{heading}</h5>
					<p className="data-body">
						{value}
						{unit}
					</p>
				</div>
			</div>
		</>
	);
};

export default DetailCard;
