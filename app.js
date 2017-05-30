// Server
var request = require('superagent')
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

    newMember(
      req.body.name,
      req.body.email,
      req.body.fob,
      req.body.address,
      (err,res)=>{
          console.log("newMember:", res.body)
      })

    res.send("yessire")
})

app.get('/current_state', (req,res)=>{

})

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname, '/dist/index.html'));
})

app.listen(process.env.PORT || 8003);


function newMember(name, email, fob, address, callback){
  let data = {
      action: {
        type: "member-created",
        address: address,
        fob: fob,
        'active?': true,
        balance: "0",
        name:name,
        email:email
      }
    }

  console.log("attempting to send", data)
  request
    .post("http://localhost:3000/members")
    .send(data)
    .end(callback)
}
