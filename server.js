const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
require("dotenv").config();
const path = require("path");

// set up Handlebars.js as your app's template engine of choice & add helper functions:
const exphbs = require("express-handlebars");

const hbs = exphbs.create({}); // [add 'helpers' in the bracket after]

// set up express-session & sequelize store:
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Static assets folder
app.use(express.static(path.join(__dirname, "public")));

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
