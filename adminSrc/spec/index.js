import express from 'express'

import preAuth from './preAuth'
import membersSpec from './membersSpec'
import bountiesSpec from './bountiesSpec'

const router = express.Router()

router.use('/events', preAuth)
router.use( '/events', membersSpec)
router.use( '/events', bountiesSpec)

module.exports = router
