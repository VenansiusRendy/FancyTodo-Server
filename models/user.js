"use strict";
const bcrypt = require("bcrypt");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			User.hasMany(models.Todo);
		}
	}
	User.init(
		{
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: true,
					notEmpty: true,
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: true,
					notEmpty: true,
				},
			},
		},
		{
			hooks: {
				beforeCreate(user) {
					const salt = bcrypt.genSaltSync(10);

					user.password = bcrypt.hashSync(user.password, salt);
					return user;
				},
			},
			sequelize,
			modelName: "User",
		}
	);
	return User;
};
