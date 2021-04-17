const errorHandler = (err, req, res, next) => {
	console.error(err.name);
	console.log(err);

	let code;
	let errors = [];
	switch (err.name) {
		case "SequelizeValidationError":
			code = 400;
			errors = err.errors ? err.errors.map((er) => er.message) : [];
			break;
		case "SequelizeUniqueConstraintError":
			code = 400;
			errors = err.errors ? err.errors.map((er) => er.message) : [];
			break;
		case "InvalidEmailAndPassword":
			code = 400;
			errors.push(err.message);
			break;
		case "InvalidToken":
			code = 401;
			errors.push(err.message);
			break;
		case "MissingToken":
			code = 401;
			errors.push(err.message);
			break;
		case "TaskNotFound":
			code = 404;
			errors.push(err.message);
			break;
		default:
			code = 500;
			errors.push("Internal server error");
	}
	res.status(code).json({ errors });
};

module.exports = errorHandler;
