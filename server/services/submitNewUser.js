const db = require("../config/db.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.submitNewUser = (name, lastName, mail, password) => {
  return new Promise(function (resolve, reject) {
    const sqlInsert =
      "INSERT INTO ShopUsers (name,lastName,mail,password) VALUES (?,?,?,?)";

    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        console.log("bcrypt err", err);
      }

      db.query(sqlInsert, [name, lastName, mail, hash], (err, result) => {
        console.log("rejstacja uzdkownika", err, result);
        resolve(1);
      });
    });
  });
};
