const jwt = require("jsonwebtoken");
const { Todo, User } = require("../models");

const authentication = (req, res, next) => {
	if (!req.headers.access_token)
		next({
			name: "MissingToken",
			message: "Missing Access Token",
		});
	try {
		const decoded = jwt.verify(
			req.headers.access_token,
			process.env.JWT_SECRET
		);
		req.user_id = decoded.id;
	} catch (error) {
		next({
			name: "InvalidToken",
			message: "Invalid Token",
		});
	}
	User.findByPk(req.user_id)
		.then((user) => {
			if (!user) throw { name: "LoginFail" };
			next();
		})
		.catch((err) => next(err));
};

const todoAuthorization = (req, res, next) => {
	const { id } = req.params;
	Todo.findOne({ where: { id: id, UserId: req.user_id } })
		.then((todo) => {
			if (!todo) next({ name: "TaskNotFound", message: "Task Not Found" });
			req.todo = todo;
			next();
		})
		.catch((err) => next(err));
};

module.exports = { authentication, todoAuthorization };
