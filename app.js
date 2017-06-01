// Server
var request = require('superagent')
var express = require('express')
var app = express()
var path = require("path")

var brainLocation = "http://192.168.0.127:3000/"

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
      (err, data )=> {
        console.log({err, data})
        res.send( !!err )
      }
    )

})

app.get('/current_state', (req,res)=>{
    request
        .get(brainLocation)
        .end( (err, res2)=> {

            res.json(res2.body)
        })
})

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname, '/dist/index.html'));
})

let PORT = process.env.PORT || 8003
app.listen(PORT, err =>{
  console.log("Listening on port",PORT);
});

function chargeMember(address, callback){
  let newEvent = {
      action: {
          type: "member-charged",
          address: address,
          fob: fob,
          'active?': true,
          balance: "0",
          name:name,
          email:email
      }
  }
  memberPost(newEvent, callback)
}


function newMember(name, email, fob, address, callback){
    let newEvent = {
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
    memberPost(newEvent, callback)
}

function memberPaid(id, amount, currency, callback){
    let newEvent = {
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
    memberPost(newEvent, callback)
}

function memberPost(data, callback){
    request
      .post(brainLocation + "members")
      .send(data)
      .end(callback)
}
