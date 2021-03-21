const router = require('express').Router()
const notFoundRoutes = require('./not-found.routes')
const route1 = require('./route1.routes')
const route2 = require('./route2.routes')
const route3 = require('./route3.routes')
const route4 = require('./route4.routes')

router.use(route1)
router.use(route2)
router.use(route3)
router.use(route4)
router.use(notFoundRoutes)

module.exports = router
