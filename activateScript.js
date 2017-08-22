const request = require('superagent')
const config = require('./conf')
const actions = require('./adminSrc/brainActions')

function memberActivate(id, callback) {
  let newEvent = {
    action: {
      type: "member-activated",
      "member-id": id
    }
  }
  memberPost(newEvent, callback)
}

function memberPost(data, callback) {
  request
    .post(config.brainLocation + "members")
    .send(data)
    .end(callback)
}

const toImport = [
    {
        name: "Rhodes",
        active: 21
    }
]

request
    .get(config.brainLocation + 'members')
    .end((err, res)=>{
        if (err) return console.log({err})
        let members = res.body
        console.log({err, members})
        toImport.forEach( person => {
            members.forEach(member => {
                if (person.name == member.name){
                    let x = 0
                    while (x < person.active){
                        x++
                        memberActivate(member["member-id"], (err, res)=> {
                            console.log({err}, res.body)
                        })
                    }
                }
            })
        })
    })
