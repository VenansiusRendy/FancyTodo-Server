const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserController {
	static register(req, res, next) {
		const { email, password } = req.body;
		User.create({ email, password })
			.then((user) =>
				res
					.status(201)
					.json({ success: true, data: { id: user.id, email: user.email } })
			)
			.catch((err) => next(err));
	}
	static login(req, res, next) {
		const { email, password } = req.body;
		User.findOne({
			where: {
				email,
			},
		})
			.then((user) => {
				let match = bcrypt.compareSync(password, user.password);
				if (user && match) {
					const access_token = jwt.sign(
						{ id: user.id },
						process.env.JWT_SECRET
					);
					res.status(200).json({ success: true, access_token });
				} else {
					throw {
						status: 400,
						message: "Kombinasi email dan password salah",
					};
				}
			})
			.catch((err) => next(err));
	}
}

module.exports = UserController;
