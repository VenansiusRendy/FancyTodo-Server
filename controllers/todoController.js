const { Todo, User } = require("../models");

class TodoController {
	static read(req, res) {
		const UserId = req.user_id;
		Todo.findAll({ where: { UserId } })
			.then((todos) => res.status(200).json(todos))
			.catch((err) => res.status(500).json(err));
	}
	static add(req, res) {
		const { title, description, status, due_date } = req.body;
		const UserId = +req.user_id;
		Todo.create({
			title,
			description,
			status,
			due_date,
			UserId,
		})
			.then((todo) => res.status(201).json(todo))
			.catch((err) => {
				if (err.name === "SequelizeValidationError") {
					res.status(400).json(err);
				} else {
					res.status(500).json(err);
				}
			});
	}
	static readById(req, res) {
		const todo = req.todo;
		res.status(200).json(todo);
	}
	static update(req, res) {
		const todo = req.todo;
		const keys = Object.keys(req.body);
		keys.forEach((key) => {
			if (req.body[key]) {
				todo[key] = req.body[key];
			}
		});
		todo
			.save()
			.then((_) => {
				res.status(200).json({ success: true, data: todo });
			})
			.catch((err) => {
				res
					.status(err.status || 500)
					.json({ success: false, error: err.message || err });
			});
	}
	static updateStatus(req, res) {
		const { status } = req.body;
		const todo = req.todo;
		todo.status = status;
		todo
			.save()
			.then((_) => {
				res.status(200).json({ success: true, data: todo });
			})
			.catch((err) => {
				res
					.status(err.status || 500)
					.json({ success: false, error: err.message || err });
			});
	}
	static delete(req, res) {
		const todo = req.todo;
		todo
			.destroy()
			.then((_) => {
				res
					.status(200)
					.json({ success: true, message: "Todo deleted successfully" });
			})
			.catch((err) => {
				res
					.status(err.status || 500)
					.json({ success: false, error: err.message || err });
			});
	}
}
module.exports = TodoController;
