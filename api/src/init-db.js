require('dotenv').config();
const mysql = require('mysql2/promise');

async function createDatabase() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        });
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``);
        console.log(`Database ${process.env.DB_NAME} created or successfully checked.`);
        connection.end();
    } catch (error) {
        console.error('Failed to create database:', error);
    }
}

createDatabase();
