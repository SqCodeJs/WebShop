const { Router } = require("express");
const db = require("../config/db");
const {
  putRegister,
  submitNewUser,
} = require("../controllers/registerController");
const router = Router();

router.put("/", putRegister);
// router.post("/", );

router.use((request, response) =>
  response.status(404).json({
    message: "nie znaleziono metody w endpoint'cie /register",
  })
);

module.exports = router;
