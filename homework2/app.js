const express = require('express')
const app = express()
const appRoutes = require('./routes/index.routes')
const morgan = require('morgan')
const path = require('path')
const fs = require('fs')

const pathToLogs = path.join(__dirname, 'logs', 'access.log')

const accessLogStream = fs.createWriteStream(pathToLogs, {
  flags: 'a'
})
app.use(morgan('combined', {
  stream: accessLogStream
}))

app.use(express.json())

app.use(appRoutes)

module.exports = app
