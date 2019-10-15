module.exports = (app) => {
    const rcs = require('../controllers/rentedcar.controller.js');
    const cars = require('../controllers/car.controller.js');
    const users = require('../controllers/user.controller.js');
    app.post('/rcs/cars/carId, rcs.rents');
}