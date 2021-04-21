"use strict";
const { Model } = require("sequelize");
const dayjs = require("dayjs");
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
					notEmpty: {
						args: true,
						msg: "Title cannot be empty",
					},
					notNull: true,
				},
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						args: true,
						msg: "Description cannot be empty",
					},
					notNull: true,
				},
			},
			status: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						args: true,
						msg: "Status cannot be empty",
					},
					notNull: true,
				},
			},
			due_date: {
				type: DataTypes.DATE,
				allowNull: false,
				validate: {
					notEmpty: {
						args: true,
						msg: "Due Date cannot be empty",
					},
					notNull: true,
					date(value) {
						if (!dayjs(value).isAfter(new Date()))
							throw new Error("Due Date Must Be Greater Than Today");
					},
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
