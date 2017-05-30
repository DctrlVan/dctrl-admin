// Server
var express = require('express')
var app = express()
var path = require("path")

// HTTP handlers
var bodyParser = require('body-parser');
var multer = require('multer');

// outbound http client
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/new_member', (req,res)=> {
    console.log("/new_member")
    console.log("req body", req.body)
    res.send("yessire")
})

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname, '/dist/index.html'));
})

app.listen(process.env.PORT || 8003);







function newMember(name, email, fob, address, callback){
  request
    .post("http://localhost:3000/members")
    .send({
        action: {
          type: "member-created",
          address: address,
          fob: fob,
          'active?': true,
          balance: "0",
          name:name,
          email:email
        }
      })
    .end(callback)
}
