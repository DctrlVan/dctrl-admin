import express from 'express'

// import fobCheck from './fobCheck'
import membersSpec from './membersSpec'
import tasksSpec from './tasksSpec'
import dctrlSpec from './dctrlSpec'
import resourcesSpec from './resourcesSpec'
import invoicesSpec from './invoicesSpec'

const router = express.Router()

// router.post('/events', fobCheck)

router.post('/events', membersSpec)
router.post('/events', dctrlSpec)
router.post('/events', tasksSpec)
router.post('/events', resourcesSpec)
router.post('/events', invoicesSpec)

module.exports = router
