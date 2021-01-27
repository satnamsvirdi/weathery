import { SunIcon, MoonIcon } from "./FeatherIcons";

import "./ThemeSwitcher.css";

const ThemeSwitcher = ({ handleThemeSwitcher, darkTheme }) => {
	return (
		<div className="switcher">
			<button
				type="button"
				className="switcher-btn"
				onClick={handleThemeSwitcher}
			>
				{darkTheme ? <MoonIcon /> : <SunIcon />}
			</button>
		</div>
	);
};

export default ThemeSwitcher;
