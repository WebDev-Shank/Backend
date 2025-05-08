// *4. Day4 [Express.js, Routing & Middleware]
//!    a)Introduction to Express.js
//       Express is a node js web application framework that provides broad features for building web and mobile applications.
//       Manages everything from receiving the request and giving the response.
//       It is used to build a single page, multipage, and hybrid web application.
//       It's a layer built on the top of the Node js that helps manage servers and routes.

//!    b)Setting up a basic Express application
//       i)npm i express
//       ii)const express = require("express");
//          const app = express();

//          app.get("/", function (req, res) {
//             res.send("Hello Express js");
//          });
//          app.listen(3333);

//!    c)Routing
//       Is like gives path after the domain like www.google.com/photos
//       /photos are route
//       ex - app.get("/" or "route", function (req, res) {}

//!    d)Middleware
//       Express middleware is a function that is compiled during the lifecycle of the Express server.

//       the middleware can end the HTTP request independently or transfer it to another middleware using the next function. It will allow you to categorize the code and generate reusable middleware, just like chaining.

//       jab bhi server request accept karta he waha se route ke beach pahuchne tak agar app us request ko beech me rockte ho and kuch perfome karto ho, to ye elemene Middleware kahalata he.

//*Example of Middleware
// const express = require("express");
// const app = express();
//!this is middleware
// app.use(function (req, res, next) {
//   console.log("Middle Ware is Running.....");
//   next();
// });
// app.get("/", function (req, res) {
//   res.send("Hello Express Js");
//   console.log("Running Successfull");
// });

//!    e)Request and response handling
// frontEnd -> backEnd -> frontEnd is called Request and response handling.

//!    f)Error handling
//! Example
// const express = require("express");
// const app = express();

// route is /shank like a path after domain host
// app.get("/shank", function (req, res, next) {
// res.send("Hello Shankar");
//   return next(new Error("Not Implemented !!!"));
// });

//* this is error handle
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something went wrong!!");
// });

// 3333 is port
// app.listen(3333);

//!All
const express = require("express");
const app = express();

//route is / like a path after domain host
app.get("/", function (req, res) {
  res.send("Hello Express Js");
  console.log("Running Successfull");
});

//route is /shank like a path after domain host
app.get("/shank", function (req, res, next) {
  res.send("Hello Shankar");
  return next(new Error("Not Implemented !!!"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!!");
});

// 3333 is port
app.listen(3333); //http://localhost:3333
