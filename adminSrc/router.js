const request = require('superagent')
const express = require('express')
const path = require("path")
const bodyParser = require('body-parser')
const multer = require('multer')
const events = require('./events')
const config = require('../configuration')
const dbQueries = require('./dbQueries')
const state = require('./state')

module.exports = function applyRouter(app){

    app.get('/db/member/:memberId', (req, res) => {
      dbQueries.getEventsForMember(req.params.memberId, (err, memberHistory)=> {
        res.json(memberHistory)
      })
    })

    app.get('/db/bounty/:bountyId', (req, res) => {
      dbQueries.getEventsForBounty(req.params.bountyId, (err, bountyHistory)=> {
        res.json(bountyHistory)
      })
    })

    app.get('/state', (req, res) => {
      res.json(state.getState())
    })

    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, '../dist/index.html'));
    })

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: true
    }))

    app.post('/member_create', (req, res) => {
      events.memberCreate(
          req.body.name,
          req.body.email,
          req.body.fob,
          buildResCallback(res)
      )
    })

    app.post('/member_pay', (req, res) => {
      events.memberPaid(
        req.body.memberId,
        req.body.amount,
        req.body.notes,
        buildResCallback(res)
      )
    })

    app.post('/member_charge', (req, res) => {
      events.memberCharged(
        req.body.address,
        req.body.amount,
        req.body.notes,
        buildResCallback(res)
      )
    })

    app.post('/member_deactivate', (req, res) => {
        let memberId = req.body.memberId
        events.memberDeactivate( memberId, buildResCallback(res) )
    })

    app.post('/member_activate', (req, res) => {
        let memberId = req.body.memberId
        events.memberActivate( memberId, buildResCallback(res) )
    })

    app.post('/bounty_create', (req, res) => {
        let name = req.body.name
        let description = req.body.description
        let value = req.body.value
        let boost = req.body.boost
        let cap = req.body.cap
        let fob = req.body.fob
        events.bountyCreate(name, description, value, cap, boost, fob, buildResCallback(res) )
    })

    app.post('/bounty_edit', (req,res)=> {
        let bountyId = req.body.bountyId
        let amount = req.body.amount
        let notes = req.body.notes
        events.bountyEdit(bountyId, amount, notes, buildResCallback(res))
    })

    app.post('/bounty_boost', (req,res)=> {
        let bountyId = req.body.bountyId
        let amount = req.body.amount
        let notes = req.body.notes
        events.bountyBoost(bountyId, amount, notes, buildResCallback(res))
    })

    app.post('/cash_expense', (req, res) => {
        let amount = req.body.amount
        let notes = req.body.notes
        events.cashExpense(amount, notes, buildResCallback(res))
    })

    app.post('/cash_received', (req, res) => {
        let amount = req.body.amount
        let notes = req.body.notes
        events.cashReceived(amount, notes, buildResCallback(res) )
    })

    app.post('/supplies_stock', (req, res) => {
        // need to expand types
        let amount = req.body.amount
        let notes = req.body.notes
        events.suppliesStock(amount, notes, buildResCallback(res))
    })

    // app.post('/claim_bounty', (req, res) => {
    //     console.log("resbody", res.body)
    //     //TODO finish
    //     let bountyId = "4f37e360-4caf-11e7-ae6e-e9ad780f3651"
    //     let address = "3EerW4nQeMRJUTjM8UBbsdQPZxDA3VKdGX"
    //     bountyClaim( bountyId, address, buildResCallback(res) )
    // })
}

function buildResCallback(res){
    return (err, dbResponse) => {
        if (err || !dbResponse) {
            console.log('returning error', err)
            res.send('brain error')
        } else {
            console.log("response:", dbResponse)
            res.send(dbResponse)
        }
    }
}
