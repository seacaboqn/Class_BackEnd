const {Sequelize} = require('sequelize'); // library for mapping models

module.exports = new Sequelize({
	username: process.env.DB_USER,
	database: process.env.DB_NAME,
	host: process.env.DB_HOST,
	password: process.env.DB_PASS,
	port: process.env.DB_PORT,
	dialect: 'mysql',
	synchronize: true,
	autoLoadModels: true,

	define: {
		timestamps: true, // only columun name you have, without = id, createdAt, updatedAt
		//freezeTableName: true // only table name you have, without = tablename(s)
	},
	logging: true
});
