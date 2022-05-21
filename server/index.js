if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const { json, urlencoded } = require("body-parser");

const cors = require("cors");
const cookieParser = require("cookie-parser");

const passport = require("passport");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const flash = require("express-flash");
const port = process.env.PORT || 3001;

const registerRoutes = require("./routes/registerRoutes.js");
const loginRoutes = require("./routes/loginRoutes.js");
const productsRoutes = require("./routes/productsRoutes.js");
const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const sessionStore = new MySQLStore({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootroot",
  database: "ShopDB",
});

app.use(flash());

app.use(
  session({
    secret: process.env.SESSIONS_SECRET || "r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#",
    resave: true,
    saveUninitialized: true,
    store: sessionStore,
  })
);
app.use(
  cookieParser(process.env.SESSIONS_SECRET || "r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#")
);

app.use(passport.initialize());

require("./config/passport.js")(passport);
app.use("/", productsRoutes);

app.use("/register", registerRoutes);
app.use("/login", loginRoutes);

app.listen(port, () => {
  console.log(`Server is running now on ${port}...`);
});
