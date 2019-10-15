module.exports = (app) => {
    const cars = require('../controllers/car.controller.js');
    app.post('/cars', cars.create);
    app.get('/cars', cars.findAll);
    app.get('/cars/:carId', cars.findOne);
    app.put('/cars/:carId', cars.update);
    app.delete('/cars/:carId', cars.delete);
}