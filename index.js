var path = require('path');
var ParseServer = require("parse-server").ParseServer;

var server = new ParseServer({
  appId: "hello",
  clientKey: "world",
  restKey: "bam",
  masterKey: "master",
  javascriptKey: process.env.JAVASCRIPT_KEY,
  serverURL: "http://localhost:1337/",
  cloud: path.resolve("./main.js")
});

var app = require("express")();
app.use(server);
app.listen(1337);