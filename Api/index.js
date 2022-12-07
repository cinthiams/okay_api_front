const { request } = require('express');
const express = require('express');
const res = require('express/lib/response');
const server = express();
var cors = require('cors')

var app = express()

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:2222');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  return next();
});

server.use(express.json())

server.get('/api/ok',cors(),(req, res) => {
  console.log("acessou ------------------------------------------");
  return res.json({Palavra : 'okay'})
})

server.listen(2222);




