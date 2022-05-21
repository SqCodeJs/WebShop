const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootroot",
  database: "ShopDB",
});
db.connect(function (err) {
  if (err) throw err;
  console.log("SUCCES - Connected to database");
});
module.exports = db;
