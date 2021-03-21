const router = require('express').Router();

const notFoundRoutes = require('./not-found.routes');
const planetsRoutes = require('./planets.routes');
const swaggerRoutes = require('./swagger.routes');

router.use(planetsRoutes);
router.use(swaggerRoutes);
router.use(notFoundRoutes);

module.exports = router;
