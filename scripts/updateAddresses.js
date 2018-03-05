const request = require('superagent')
const config = require('../configuration')
const sg = require('sendgrid')(config.sendgrid.token)
const helper = require('sendgrid').mail
const fs = require('fs')
const path = require('path')

const addresses = require('./addresses')

request
    .post('http://192.168.0.110:8003/events')
    .send({
        type: 'member-address-updated',
        address: '3Hx',
        proof: 'todo'
    })
    .end((err, res)=> {
        console.log({err})
    })
