require('dotenv').config();
const http = require('http');
const expressApp = require('./app');
const path = require('path');

const pathToPlanets = path.join(__dirname, 'db', 'planets.json');
const pathToAccounts = path.join(__dirname, 'db', 'accounts.json');

process.env.PLANETS_PATH = pathToPlanets;
process.env.ACCOUNTS_PATH = pathToAccounts;

const port = process.env.PORT || 3000;
const server = http.createServer(expressApp);
server.listen(port, () => {
  console.log('Server started on port ' + port);
});
