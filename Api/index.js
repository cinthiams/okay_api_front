const express = require('express');
const server = express();


server.get('/ok', (req, res) => {
  console.log("acessou ------------------------------------------");
  return res.json({Palavra : 'okay'})
})

server.listen(2222);




