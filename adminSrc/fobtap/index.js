const express = require('express')
const router = express.Router()
const bountyCheck = require('./bountyCheck')
const vendCheck = require('./vendCheck')

router.use('/fobtap', bountyCheck)
router.use('/fobtap', vendCheck)

module.exports = router
