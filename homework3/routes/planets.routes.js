const router = require('express').Router();
const {
  addPlanet,
  getAllPlanets,
  getPlanetById,
  editPlanet,
  deletePlanet
} = require('../controllers/planets.controller');

router
  .route('/planets')
  .get(getAllPlanets)
  .post(addPlanet);

router
  .route('/planets/:id')
  .get(getPlanetById)
  .put(editPlanet)
  .delete(deletePlanet);

module.exports = router;
