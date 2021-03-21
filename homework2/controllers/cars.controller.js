let CARS = [
  {
    id:1,
    brand: 'BMW',
    model: '325i',
    year: 2007,
    color: 'MetalicSilver'
  },
  {
    id:2,
    rand: 'Opel',
    model: 'Vectra',
    year: 2005,
    color: 'White'
  }
]

exports.getAllCars = (req, res, next) => {
  res.status(200).send(CARS)
}

exports.postCar = (req, res, next) => {
  console.log(req.body)
  res.status(200).send()
}

exports.getCar = (req, res, next) => {
  const id = +req.params.id
  const foundCar = CARS.find(car => car.id === id)
  if (!foundCar) {
    res.status(400).send('Invalid parameter for id!')
  }
  res.status(200).send(foundCar)
}

exports.deleteCar = (req, res, next) => {
  const id = +req.params.id
  if (!id || typeof id !== 'number') {
    res.status(400).send('Invalid parameter!')
  }
  CARS = CARS.filter(car => car.id !== id)
  res.status(200).send('Successfully deleted')
}

exports.addCar = (req, res, next) => {
  const id = +req.params.id
  if (!id || typeof id !== 'number') {
    res.status(400).send('Invalid parameter!')
  }
  CARS = CARS.filter(car => car.id !== id)
  res.status(201).send('Successfully added')
}
