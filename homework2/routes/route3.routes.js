const router = require('express').Router()
const { addCar } = require('../controllers/cars.controller')

router.put('/cars/:id', addCar)

module.exports = router
