const Planet = require('../models/Planet.model');
const Account = require('../models/Account.model')
const uuid = require('uuid');

exports.addPlanet = async planetInfo => {
  const allPlanets = await Planet.getPlanets();
  const allAccounts = await Account.getAccounts();
  const newPlanetId = uuid.v4();
  const newPlanet = {
    id: newPlanetId,
    distanceFromSun: planetInfo.distanceFromSun,
    name: planetInfo.name,
    size: planetInfo.size,
    account: planetInfo.account
  };

  allPlanets.push(newPlanet);
  const findAccountIndex = allAccounts.findIndex(
    account => account.id == planetInfo.account.id
  );

  allAccounts[findAccountIndex].planets
    ? allAccounts[findAccountIndex].planets.push({
        id: newPlanetId,
        name: planetInfo.name
      })
    : (allAccounts[findAccountIndex].planets = [
        {
          id: newPlanetId,
          name: planetInfo.name
        }
      ]);

  await Account.saveAccounts(allAccounts);
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
    distanceFromSun: planetInfo.distanceFromSun,
    name: planetInfo.name,
    size: planetInfo.size
  };

  await Planet.savePlanets(allPlanets);
};

exports.deletePlanet = async id => {
  const allPlanets = await Planet.getPlanets();
  const foundPlanet = allPlanets.find(planet => planet.id == id);
  const allAccounts = await Account.getAccounts();
  const findAccountIndex = allAccounts.findIndex(
    account => account.id == id
  );

  const updatedPlanets = allPlanets.filter(planet => planet.id != id);
  allAccounts[findAccountIndex].planets = allAccounts[findAccountIndex].planets.filter(
    planet => planet.id != id
  );

  await Account.saveAccounts(allAccounts);
  await Planet.savePlanets(updatedPlanets);
};
