const router = require('express').Router();

const planetsRoutes = require('./planets.routes');
const accountsRoutes = require('./accounts.routes');
const swaggerRoutes = require('./swagger.routes');
const notFoundRoutes = require('./not-found.routes');

router.use(planetsRoutes);
router.use(accountsRoutes);
router.use(swaggerRoutes);
router.use(notFoundRoutes);

module.exports = router;
