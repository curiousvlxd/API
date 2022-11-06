import config from './main.js';
import mysql2 from 'mysql2';

const connection = mysql2.createConnection({
    host: config.DB.HOST,
    port: config.DB.PORT,
    user: config.DB.USER,
    password: config.DB.PASSWORD,   
    database: config.DB.DATABASE
});
export default connection;