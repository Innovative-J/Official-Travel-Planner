const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const routes = require("./controllers");

const app = express();
const port = 3000;
const hbs = exphbs.create({});

app.engine(
  "handlebars",
  exphbs({
    // extname: "handlebars",
    // defaultLayout: "",
    // // layoutsDir: "views/layouts",
  })
);

app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "public")));
console.log("directory", path.join(__dirname, "public"));
// app.set("views", path.join(__dirname, "/views"));
app.set("views", "./views");

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
