const router = require('express').Router()
const { getAllCars } = require('../controllers/cars.controller');

router.get('/cars', getAllCars)

module.exports = router
