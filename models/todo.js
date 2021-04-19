"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Todo extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Todo.belongsTo(models.User);
		}
	}
	Todo.init(
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
					notNull: true,
				},
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
					notNull: true,
				},
			},
			status: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
					notNull: true,
				},
			},
			due_date: {
				type: DataTypes.DATE,
				allowNull: false,
				validate: {
					notEmpty: true,
					notNull: true,
					isAfter: new Date(new Date().getDate - 1),
					// date(value) {
					// 	const dueDate = new Date(value).getTime();
					// 	const today = new Date().getTime();
					// 	if (dueDate < today) {
					// 		throw new Error("Due Date Cannot Be Before Today");
					// 	}
					// },
				},
			},
		},
		{
			sequelize,
			modelName: "Todo",
		}
	);
	return Todo;
};
