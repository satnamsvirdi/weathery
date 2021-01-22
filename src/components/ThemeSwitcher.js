import { SunIcon } from "./FeatherIcons";

import "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
	return (
		<div className="switcher">
			<button type="button" className="switcher-btn">
				<SunIcon />
			</button>
		</div>
	);
};

export default ThemeSwitcher;
