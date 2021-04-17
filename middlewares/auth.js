const jwt = require("jsonwebtoken");
const { Todo } = require("../models");

const authentication = (req, res, next) => {
	if (!req.headers.access_token)
		return res
			.status(401)
			.json({ success: false, message: "Missing access token" });
	try {
		const decoded = jwt.verify(req.headers.access_token, "Secret");
		req.user_id = decoded.id;
		next();
	} catch (error) {
		res.status(401).json({ success: false, message: "Token Invalid" });
	}
};

const todoAuthorization = (req, res, next) => {
	const { id } = req.params;
	Todo.findOne({ where: { id: id, UserId: req.user_id } })
		.then((todo) => {
			if (!todo)
				return res
					.status(404)
					.json({ success: false, message: "Task not found" });
			req.todo = todo;
			next();
		})
		.catch((err) => {
			res
				.status(err.status || 500)
				.json({ success: false, error: err.message || err });
		});
};

module.exports = { authentication, todoAuthorization };
