const db = require("../config/db");
exports.getProductFromDB = (id, quantity) => {
  return new Promise((resolve, reject) => {
    const sqlInsert = "SELECT * FROM ShopProducts WHERE id = ?";
    db.query(sqlInsert, [id], (err, result) => {
      console.log("Result", result);
    });
  });
};
