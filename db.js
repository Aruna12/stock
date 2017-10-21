const mysql = require("mysql2/promise");

const connectionOpts = {
  user: "root",
  password: "root",
  database: "stock1"
};

module.exports = mysql.createConnection(connectionOpts);
