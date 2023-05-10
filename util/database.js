const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "new_schema",
  password: "s_qs@ym_i#22",
});

module.exports = pool.promise();
