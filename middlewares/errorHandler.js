const errorHandler = (err, req, res, next) => {
	console.error(err.name);

	let code;
	let errors = [];
	switch (err.name) {
		case "SequelizeValidationError":
			code = 400;
			errors = err.errors ? err.errors.map((el) => el.message) : [];
			break;
		default:
			code = 500;
			errors.push("Internal server error");
	}
	res.status(code).json({ errors });
};

module.exports = errorHandler;
