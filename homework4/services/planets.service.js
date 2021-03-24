const Planet = require('../models/Planet.model');
const uuid = require('uuid');

exports.addPlanet = async planetInfo => {
  const allPlanets = await Planet.getPlanets();
  const newPlanetId = uuid.v4();
  const newPlanet = {
    id: newPlanetId,
    name: planetInfo.name,
    size: planetInfo.size,
    distanceFromSun: planetInfo.distanceFromSun
  };
console.log(newPlanet)
  allPlanets.push(newPlanet);

  await Planet.savePlanets(allPlanets);
};

exports.getAllPlanets = async () => {
  const allPlanets = await Planet.getPlanets();
  return allPlanets;
};

exports.getPlanetById = async id => {
  const allPlanets = await Planet.getPlanets();
  const foundPlanet = allPlanets.find(planet => planet.id == id);
  return foundPlanet;
};

exports.editPlanet = async (id, planetInfo) => {
  const allPlanets = await Planet.getPlanets();
  const foundPlanetIndex = allPlanets.findIndex(planet => planet.id == id);

  allPlanets[foundPlanetIndex] = {
    ...allPlanets[foundPlanetIndex],
    name: planetInfo.name,
    size: planetInfo.size,
    distanceFromSun: planetInfo.distanceFromSun
  };

  await Planet.savePlanets(allPlanets);
};

exports.deletePlanet = async id => {
  const allPlanets = await Planet.getPlanets();
  const updatedPlanets = allPlanets.filter(planet => planet.id != id);

  await Planet.savePlanets(updatedPlanets);
};
