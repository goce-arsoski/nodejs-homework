const router = require('express').Router()
const { postCar } = require('../controllers/cars.controller')

router.post('/cars', postCar)

module.exports = router
