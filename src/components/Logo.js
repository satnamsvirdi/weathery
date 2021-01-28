import "./Logo.css";

const Logo = ({ darkTheme }) => {
	const logoSrc = `./assets/logo-${darkTheme ? "dark" : "light"}.svg`;
	return (
		<div className="brand">
			<span className="brand-image-container">
				<a href="/">
					<img
						src={logoSrc}
						alt=""
						className="brand-image"
						width="36"
						height
					/>
				</a>
			</span>
			<span className="brand-name hidden">Weathery</span>
		</div>
	);
};

export default Logo;
