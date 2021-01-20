function Error({ error }) {
	return (
		<div className="test">
			<h1 className="test-heading">{error.cod}</h1>
			<p className="test-text">{error.message}</p>
		</div>
	);
}

export default Error;
