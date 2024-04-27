require('dotenv').config();
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

const initialConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT
};

async function initializeDatabase() {
    try {
        const connection = await mysql.createConnection({
            host: initialConfig.host,
            user: initialConfig.user,
            password: initialConfig.password
        });
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
        console.log(`Database ${process.env.DB_NAME} created or successfully checked.`);
        connection.end();

        const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT
        });

        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        return sequelize;

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

initializeDatabase();

