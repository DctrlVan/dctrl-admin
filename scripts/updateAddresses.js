const request = require('superagent')
const config = require('../configuration')
const sg = require('sendgrid')(config.sendgrid.token)
const helper = require('sendgrid').mail
const fs = require('fs')
const path = require('path')
const addresses = require('./addresses')

var templateReader = function(templatePath) {
  var filePath = path.join(__dirname, templatePath);
  console.log({filePath})
  return fs.readFileSync(filePath, {encoding: 'utf-8'})
};

let emailBody = templateReader('template.html')

request
    .get('localhost:8003/state')
    .end((err, res) => {
        res.body.members.forEach( member => {
            if (member.email){
              let data = {
                  type: 'member-address-updated',
                  memberId: member.memberId,
                  address: addresses.pop()
              }

              request
                  .post('http://192.168.0.110:8003/events')
                  .send(data)
                  .end((err, res)=> {
                      console.log({err,res: res.body})
                  })
            }
        })
    })
