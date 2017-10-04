const express = require('express')
const router = express.Router()
const bountyCheck = require('./bbountyCheck')
const vendCheck = require('./vendCheck')

router.use('/fobtap', bountyCheck)
router.use('/fobtap', vendCheck)

module.exports = router
