const { User } = require("../models");
const { OAuth2Client } = require("google-auth-library");
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
				let match = bcrypt.compareSync(password, user ? user.password : "");

				if (!user || !match)
					throw {
						name: "InvalidEmailAndPassword",
						message: "Invalid email and password",
					};

				const access_token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
				res.status(200).json({ success: true, access_token });
			})
			.catch((err) => next(err));
	}

	static googleLogin(req, res, next) {
		const { token } = req.body;
		const client = new OAuth2Client(process.env.CLIENT_ID);
		async function verify() {
			const ticket = await client.verifyIdToken({
				idToken: token,
				audience: process.env.CLIENT_ID,
			});
			const payload = ticket.getPayload();
			// console.log(payload);
			// const userid = payload["sub"];
			// If request specified a G Suite domain:
			// const domain = payload['hd'];
			User.findOne({
				where: {
					email: payload.email,
				},
			})
				.then((user) => {
					if (!user) {
						User.create({
							email: payload.email,
							password: process.env.DEFAULT_PASSWORD,
						});
					} else {
						return user;
					}
				})
				.then((user) => {
					const access_token = jwt.sign(
						{ id: user.id },
						process.env.JWT_SECRET
					);
					res.status(200).json({ success: true, access_token });
				})
				.catch((err) => next(err));
		}
		verify().catch(console.error);
	}
}

module.exports = UserController;
