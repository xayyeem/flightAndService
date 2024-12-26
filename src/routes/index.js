const express = require('express')
const router = express.Router()


const v1ApiRoute = require('./v1/index')

router.use('/v1', v1ApiRoute)
// router.use('/v2' v2ApiRoute)

module.exports = router