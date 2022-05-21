const db = require("../config/db.js");
exports.getUserById = (id) => {
  return new Promise((resolve, reject) => {
    const sqlInsert = "SELECT * FROM ShopUsers WHERE id = ?";
    db.query(sqlInsert, [id], (err, result) => {
      if (result.length > 0) {
        resolve({
          id: result[0].id,
          name: result[0].name,
          mail: result[0].mail,
          pass: result[0].password,
        });
      } else resolve(null);
    });
  });
};
