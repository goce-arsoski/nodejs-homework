require('dotenv').config()
const http = require('http')
const expressApp = require('./app')

const port = process.env.PORT
const server = http.createServer(expressApp)

server.listen(port, () => {
  console.log('Server is started!')
})
