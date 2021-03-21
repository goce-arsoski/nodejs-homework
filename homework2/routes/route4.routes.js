const router = require('express').Router()
const { deleteCar } = require('../controllers/cars.controller')

router.delete('/cars/:id', deleteCar)

module.exports = router
