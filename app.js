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
    console.log("/new_member", req.body)
    newMember(
        req.body.name,
        req.body.email,
        req.body.fob,
        req.body.address,
        (err, data)=> {
            console.log({err, data})
            res.send( !!err )
        }
    )
})

app.post('/member_paid', (req,res)=>{
    console.log("/member_paid", req.body)
    memberPaid(
        req.body.address,
        req.body.amount,
        req.body.notes,
        (err, data)=> {
            console.log({err,data})
        }
    )
})

app.post('/member_charged', (req,res)=>{
    console.log("/member_charged", req.body)
    memberCharged(
        req.body.address,
        req.body.amount,
        req.body.notes,
        (err, data)=> {
            console.log({err,data})
        }
    )
})

app.post('/member_deactivate', (req,res)=>{
    console.log("/member_deactivate", req.body)
    let address = req.body.address
    memberDeactivate(address, (err, data)=>{
        console.log({err,data})
    })
})

app.post('/cash_expense', (req,res)=>{
    let amount = req.body.amount
    let notes = req.body.notes
    cashExpense(amount, notes, (err, data)=>{
        console.log({err,data})
    })
})

app.post('/cash_received', (req,res)=>{
    let amount = req.body.amount
    let notes = req.body.notes
    cashReceived(amount, notes, (err, data)=>{
        console.log({err,data})
    })
})


app.get('/current_state', (req,res)=>{
    request
        .get(brainLocation)
        .end( (err, res2)=> {
            if (err){
                console.log(err)
                return null
            }
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

function memberPaid(address, amount, notes, callback){
    let newEvent = {
        action: {
            type: "member-paid",
            address,
            amount: amount.toString(),
            "cash?":true,
            notes
        }
    }
    memberPost(newEvent, callback)
}

function cashReceived(amount, notes, callback){
    let newEvent = {
        action: {
            type: "cash-increase",
            amount: amount.toString(),
            notes
        }
    }
    cashPost(newEvent, callback)
}

function cashExpense(amount, notes, callback){
    let newEvent = {
        action: {
            type: "cash-decrease",
            amount: amount.toString(),
            notes
        }
    }
    cashPost(newEvent, callback)
}


function memberCharged(address, amount, notes, callback){
    let newEvent = {
        action: {
            type: "member-charged",
            address,
            amount,
            notes
        }
    }
    memberPost(newEvent, callback)
}

function memberDeactivate(address, callback){
    let newEvent = {
        action: {
            type: "member-deactivated",
            address
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

function cashPost(data, callback){
    request
      .post(brainLocation + "cash")
      .send(data)
      .end(callback)
}
