const router = require('express').Router()

router.use('*', (req, res) => {
  res.status(404).send(JSON.stringify('Not Found!'))
})

module.exports = router
