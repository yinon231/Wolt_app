require("dotenv").config();
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
module.exports = { DB_HOST, DB_USER, DB_PASS };
