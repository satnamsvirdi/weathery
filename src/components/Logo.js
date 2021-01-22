import "./Logo.css";

const Logo = () => {
	return (
		<div className="brand">
			<span className="brand-image-container">
				<a href="/">
					<img
						src="./assets/logo.png"
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
