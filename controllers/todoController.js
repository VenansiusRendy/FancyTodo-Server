const { Todo, User } = require("../models");

class TodoController {
	static read(req, res, next) {
		const UserId = req.user_id;
		Todo.findAll({ where: { UserId } })
			.then((todos) => res.status(200).json({ success: true, data: todos }))
			.catch((err) => next(err));
	}
	static add(req, res, next) {
		const { title, description, status, due_date } = req.body;
		const UserId = +req.user_id;
		Todo.create({
			title,
			description,
			status,
			due_date,
			UserId,
		})
			.then((todo) => res.status(201).json({ success: true, data: todo }))
			.catch((err) => next(err));
	}
	static readById(req, res) {
		const todo = req.todo;
		res.status(200).json({ success: true, data: todo });
	}
	static update(req, res, next) {
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
			.catch((err) => next(err));
	}
	static updateStatus(req, res, next) {
		const { status } = req.body;
		const todo = req.todo;
		todo.status = status;
		todo
			.save()
			.then((_) => {
				res.status(200).json({ success: true, data: todo });
			})
			.catch((err) => next(err));
	}
	static delete(req, res, next) {
		const todo = req.todo;
		todo
			.destroy()
			.then((_) => {
				res
					.status(200)
					.json({ success: true, message: "Task deleted successfully" });
			})
			.catch((err) => next(err));
	}
}
module.exports = TodoController;
