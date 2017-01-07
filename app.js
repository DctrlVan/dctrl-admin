// Server
var express = require('express');
var app = express();

// HTTP handlers
var bodyParser = require('body-parser');
var multer = require('multer');

// outbound http client
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/*', function(req,res){
  res.sendFile(path.join(__dirname, '/dist/index.html'));
})

app.listen(process.env.PORT || 8003);
