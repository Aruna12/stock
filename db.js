const mysql = require("mysql2/promise");

const connectionOpts = {
  host: 8080,
  user: "root",
  password: "root",
  database: "stock1"
};

module.exports = async () => await mysql.createConnection(connectionOpts);
