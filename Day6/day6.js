const express = require("express");
const app = express();
const path = require("path");

//! Setting up parsers for form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// !console.log(__dirname + "/public"); it will give path
app.use(express.static(path.join(__dirname, "public")));
//!making views folder is important to work ejs files
app.set("view engine", "ejs");

//this is route
app.get("/", (req, res) => {
  //* to get render through html
  res.render("firstpage");
});

//*dynamic routing
// :username is dynamic path
// req.params.username to get the value
app.get("/profile/:username", (req, res) => {
  // res.send(`Welcome - ` + req.params.username);
  res.send(`Welcome - ${req.params.username}`);
});
app.listen(3000, () => {
  console.log("Node i srunning");
});
