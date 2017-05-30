const request = require("superagent")

// TODO: generate new address
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

module.exports = newMember
