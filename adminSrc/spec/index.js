import express from 'express'

import preAuth from './preAuth'
import membersSpec from './membersSpec'
import bountiesSpec from './bountiesSpec'
import dctrlSpec from './dctrlSpec'
import resourcesSpec from './resourcesSpec'

const router = express.Router()

router.use('/events', preAuth)
router.use('/events', membersSpec)
router.use('/events', dctrlSpec)
router.use('/events', bountiesSpec)
router.use('/events', resourcesSpec)

module.exports = router
