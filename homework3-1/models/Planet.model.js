const fs = require('fs/promises');

const planetReader = async () => {
  const rawData = await fs.readFile(process.env.PLANETS_PATH);
  return JSON.parse(rawData);
};

const planetWriter = async content => {
  await fs.writeFile(process.env.PLANETS_PATH, content);
};

module.exports = class Planet {
  constructor() {}

  static getPlanets() {
    return planetReader();
  }

  static savePlanets(planets) {
    return planetWriter(JSON.stringify(planets));
  }
};
