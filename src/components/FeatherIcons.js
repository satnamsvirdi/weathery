// easy-to-use debugging log
let _ = console.log;

/*
 * Default sizeset for icons
 */
const sizes = {
	small: "12",
	medium: "18",
	normal: "24",
	large: "30",
};

/*
 * @sizes	: Object
 * fn 		: returns String
 */
function evaluateSize(size) {
	if (size.small) {
		return sizes.small;
	} else if (size.medium) {
		return sizes.medium;
	} else if (size.normal) {
		return sizes.normal;
	} else if (size.large) {
		return sizes.large;
	} else {
		console.warn("Size is out of boundry");
	}
}

/*
 * @props	: Object
 * fn		: returns Boolean
 */

function isPropEmpty(props) {
	if (props && Object.keys(props).length > 0) {
		return false;
	} else {
		return true;
	}
}

/*
 * ---------------------------------------------
 * Prop-independent icon components
 * ---------------------------------------------
 *
 */

export const SunsetIcon = () => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-sunset"
			>
				<path d="M17 18a5 5 0 0 0-10 0" />
				<line x1="12" y1="9" x2="12" y2="2" />
				<line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
				<line x1="1" y1="18" x2="3" y2="18" />
				<line x1="21" y1="18" x2="23" y2="18" />
				<line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
				<line x1="23" y1="22" x2="1" y2="22" />
				<polyline points="16 5 12 9 8 5" />
			</svg>
		</>
	);
};

export const SunriseIcon = () => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-sunrise"
			>
				<path d="M17 18a5 5 0 0 0-10 0"></path>
				<line x1="12" y1="2" x2="12" y2="9"></line>
				<line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line>
				<line x1="1" y1="18" x2="3" y2="18"></line>
				<line x1="21" y1="18" x2="23" y2="18"></line>
				<line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line>
				<line x1="23" y1="22" x2="1" y2="22"></line>
				<polyline points="8 6 12 2 16 6"></polyline>
			</svg>
		</>
	);
};

export const MoonIcon = () => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-moon"
			>
				<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
			</svg>
		</>
	);
};

export const CompassIcon = () => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-compass"
			>
				<circle cx="12" cy="12" r="10"></circle>
				<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
			</svg>
		</>
	);
};

export const DropletIcon = () => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-droplet"
			>
				<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
			</svg>
		</>
	);
};

export const ThermometerIcon = () => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-thermometer"
			>
				<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
			</svg>
		</>
	);
};

export const NavigationAltIcon = () => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-navigation-2"
			>
				<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
			</svg>
		</>
	);
};

export const EyeIcon = () => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-eye"
			>
				<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
				<circle cx="12" cy="12" r="3"></circle>
			</svg>
		</>
	);
};

export const TrendingDownIcon = () => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-trending-down"
			>
				<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
				<polyline points="17 18 23 18 23 12"></polyline>
			</svg>
		</>
	);
};

export const TrendingUpIcon = () => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-trending-up"
			>
				<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
				<polyline points="17 6 23 6 23 12"></polyline>
			</svg>
		</>
	);
};

export const WindIcon = () => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-wind"
			>
				<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
			</svg>
		</>
	);
};

export const ArrowDownIcon = () => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-arrow-down"
			>
				<line x1="12" y1="5" x2="12" y2="19"></line>
				<polyline points="19 12 12 19 5 12"></polyline>
			</svg>
		</>
	);
};

export const ArrowUpIcon = () => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-arrow-up"
			>
				<line x1="12" y1="19" x2="12" y2="5"></line>
				<polyline points="5 12 12 5 19 12"></polyline>
			</svg>
		</>
	);
};

export const SearchIcon = () => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-search"
			>
				<circle cx="11" cy="11" r="8"></circle>
				<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
			</svg>
		</>
	);
};

/*
 * / (extra slash to fix code color issue in SublimeText)
 * -------------------------------------------------------
 * Prop-dependent icon components
 * -------------------------------------------------------
 * @props 			: Object
 * fn isPropEmpty	: returns Boolean
 * fn evaluateSize	: returns String
 *
 */

export const MapIcon = (props) => {
	let size = isPropEmpty(props) ? sizes.normal : evaluateSize(props);
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-map"
			>
				<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
				<line x1="8" y1="2" x2="8" y2="18"></line>
				<line x1="16" y1="6" x2="16" y2="22"></line>
			</svg>
		</>
	);
};

export const MapPinIcon = (props) => {
	let size = isPropEmpty(props) ? sizes.normal : evaluateSize(props);

	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-map-pin"
			>
				<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
				<circle cx="12" cy="10" r="3"></circle>
			</svg>
		</>
	);
};

export const SunIcon = (props) => {
	let size = isPropEmpty(props) ? sizes.normal : evaluateSize(props);
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-sun"
			>
				<circle cx="12" cy="12" r="5"></circle>
				<line x1="12" y1="1" x2="12" y2="3"></line>
				<line x1="12" y1="21" x2="12" y2="23"></line>
				<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
				<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
				<line x1="1" y1="12" x2="3" y2="12"></line>
				<line x1="21" y1="12" x2="23" y2="12"></line>
				<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
				<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
			</svg>
		</>
	);
};
