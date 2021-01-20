function Error({ error }) {
	return <p>{`${error.cod}: ${error.message}`}</p>;
}

export default Error;
