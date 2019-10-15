const Car = require('../models/car.model.js');





exports.create = (req, res) => {
    if(!req.body.vno) {
        return res.status(400).send({
            message: "Car vehicle no can not be empty"
        });
    }
    const car = new Car({ 
        model: req.body.model || "Untitled Model",
	vno: req.body.vno,
	sc: req.body.sc,
	rent: req.body.rent,
	city: req.body.city,
	isRented: req.body.isRented
    });

    car.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the car."
        });
    });
};








exports.findAll = (req, res) => {
    Car.find()
    .then(car => {
        res.send(car);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving cars."
        });
    });
};








exports.findOne = (req, res) => {
    Car.findById(req.params.carId)
    .then(car => {
        if(!car) {
            return res.status(404).send({
                message: "Car not found with id " + req.params.carId
            });            
        }
        res.send(car);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Car not found with id " + req.params.carId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving car with id " + req.params.carId
        });
    });
};









exports.update = (req, res) => {
    if(!req.body.vno) {
        return res.status(400).send({
            message: "Car vehicle no can not be empty"
        });
    }


    Car.findByIdAndUpdate(req.params.carId, {
        model: req.body.model || "Untitled model",
	vno: req.body.vno,
	sc: req.body.sc,
        rent: req.body.rent,
	city: req.body.city,
	isRented: req.body.isRented
    }, {new: true})
    .then(car => {
        if(!car) {
            return res.status(404).send({
                message: "Car not found with id " + req.params.carId
            });
        }
        res.send(car);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Car not found with id " + req.params.carId
            });                
        }
        return res.status(500).send({
            message: "Error updating car with id " + req.params.carId
        });
    });
};




exports.delete = (req, res) => {
    Car.findByIdAndRemove(req.params.carId)
    .then(car => {
        if(!car) {
            return res.status(404).send({
                message: "Car not found with id " + req.params.carId
            });
        }
        res.send({message: "Car deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Car not found with id " + req.params.carId
            });                
        }
        return res.status(500).send({
            message: "Could not delete car with id " + req.params.carId
        });
    });
};