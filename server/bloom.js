import express from 'express'
import state from './state'
import cryptoUtils from '../src/crypto'
import BloomFilter from 'bloom-filter'

const router = express.Router()

function createFilter(members){
    let activeMembers = members.filter(member => (member.active > 0))
    let filter = BloomFilter.create(activeMembers.length, 0.01)
    activeMembers.forEach(member => {
        filter.insert( cryptoUtils.createHash(member.fob) )
    })
    return filter.toObject()
}

router.post('/bloom', (req, res, next) => {
    console.log('in the bloom req')
    let filter = createFilter(state.serverState.members)
    let f = JSON.stringify(filter)
    console.log({f})
    res.status(200)
    console.log('sending res:')
    res.send(f)
})

module.exports = router
