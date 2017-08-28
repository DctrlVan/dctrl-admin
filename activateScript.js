const request = require('superagent')
const config = require('./configuration')
const events = require('./adminSrc/events')

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
                        events.memberActivate(member.memberId, (err, res)=> {
                            console.log({err,res})
                        })
                    }
                }
            })
        })
    })
