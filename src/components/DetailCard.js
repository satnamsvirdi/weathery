const DetailCard = ({ heading, value, unit = "" }) => {
	return (
		<>
			<div className="col">
				<div className="col-icon">i</div>
				<div className="col-data">
					<h5 className="data-heading">{heading} </h5>
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
