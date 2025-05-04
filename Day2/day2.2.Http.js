// d)Working with Modules
//         ii)http

// ii)http
//    a)create http

// HTTP is an application layer protocol designed to transfer information between networked devices and runs on top of other layers of the network protocol stack
// a)createserver

//create http
const http = require("http");

//! a)createserver
const server = http.createServer(function (req, res) {
  res.end("Server Created");
});

server.listen(1212); //run on http://localhost:1212 server
