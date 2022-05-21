const db = require("../config/db.js");

exports.getAllproducts = () => {
  return new Promise(function (resolve, reject) {
    const dbQuery = "SELECT * FROM Products";
    db.query(dbQuery, (err, result) => {
      if (result.length > 0) {
        resolve(result);
      } else resolve(null);
    });
  });
};
