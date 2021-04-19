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
