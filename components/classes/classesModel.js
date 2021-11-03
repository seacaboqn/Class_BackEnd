const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../utils/dal');

const Classes = db.define('class', {
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	part: {
		type: DataTypes.STRING,
		allowNull: false
	},
	topic: {
		type: DataTypes.STRING,
		allowNull: false
	},
	room: {
		type: DataTypes.STRING,
		allowNull: false
	}
});

module.exports = Classes;
