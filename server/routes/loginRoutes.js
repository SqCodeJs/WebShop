require("dotenv").config();
const passport = require("passport");
const { Router } = require("express");
const {
  postLogin,
  postAuthByPassport,
} = require("../controllers/loginController");
const router = Router();
router.post("/", postLogin);
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({ id: req.user.id, name: req.user.name, mail: req.user.mail });
  }
);

router.use((request, response) =>
  response.status(404).json({
    message: "nie znaleziono metody w endpoint'cie /login",
  })
);

module.exports = router;
