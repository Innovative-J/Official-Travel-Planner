const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const path = require("path");

const routes = require("./controllers");
const sequelize = require("./config/connection");

const app = express();
const port = 3001;
const hbs = exphbs.create({});

// session setup
const sess = {
  secret: "User data",
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);

app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "public")));
console.log("directory", path.join(__dirname, "public"));
// app.set("views", path.join(__dirname, "/views"));
// app.set("views", "./views");

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
