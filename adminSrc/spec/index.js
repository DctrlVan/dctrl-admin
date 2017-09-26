import express from 'express'
import membersSpec from './membersSpec'
const router = express.Router()

router.use( '/events', membersSpec)

module.exports = router
