const {
  addPlanet,
  getAllPlanets,
  getPlanetById,
  editPlanet,
  deletePlanet
} = require('../services/planets.service');
const planets = require('../db/planets.json')

exports.addPlanet = (req, res, next) => {
  const planetInfo = req.body;
  const { distanceFromSun, name, size } = planetInfo;
  if (!distanceFromSun || !name || !size) {
    res.status(400).send('Bad input parameters!');
  } else {
    addPlanet(planetInfo)
      .then(() => {
        res.status(201).send('Planet created successfully!');
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};

exports.getAllPlanets = (req, res, next) => {
  res.render('planets/planets', {
    pageTitle: 'Planets - Planetarium',
    planets: planets
  });

  // getAllPlanets()
  //   .then(response => {
  //     res.status(200).send(response);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).send(err);
  //   });
};

exports.getPlanetById = (req, res, next) => {
  const id = req.params.id;
  const foundPlanet = planets.find(planet => planet.id === +id);

  res.render('planets/planetInfo', {
    pageTitle: `Planet - ${foundPlanet.name}`,
    planet: foundPlanet
  });

  // const id = req.params.id;
  // if (!id) {
  //   res.status(400).send('Invalid input parameter!');
  // } else {
  //   getPlanetById(id)
  //     .then(planet => {
  //       if (!planet) {
  //         res.status(404).send('Planet not found!');
  //       } else {
  //         res.status(200).send(planet);
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       res.status(500).send(err);
  //     });
  // }
};

exports.editPlanet = (req, res, next) => {
  const id = req.params.id;
  const planetInfo = req.body;
  if (!id || !planetInfo) {
    res.status(400).send('Missing input parameters!');
  } else {
    editPlanet(id, planetInfo)
      .then(() => {
        res.status(200).send('Planet edited successfully!');
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};

exports.deletePlanet = (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send('Missing ID!');
  } else {
    deletePlanet(id)
      .then(() => {
        res.status(200).send('Planet Deleted successfully!');
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};
