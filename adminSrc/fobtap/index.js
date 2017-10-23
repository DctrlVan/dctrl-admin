const express = require('express')
const router = express.Router()
const taskCheck = require('./taskCheck')
const resourceCheck = require('./resourceCheck')

router.use('/fobtap', taskCheck)
router.use('/fobtap', resourceCheck)

module.exports = router
