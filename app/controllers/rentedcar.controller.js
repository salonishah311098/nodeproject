const Car = require('../models/car.model.js');
const User = require('../models/user.model.js');
const RentedCarInfo = require('../models/rentedcar.model.js');


exports.delete

exports.rents = (req, res) => {
	let id = Car.findById(req.params.carId)
	.then(car => {
        if(!car) {
            return res.status(404).send({
                message: "Car not found with id " + req.params.carId
            });            
        }
        res.send(car);
	});
	let userid = User.findById(req.user._id)
    	Car.findById(id).then(foundCar => {
            User.findById(userid).then(user => {
                user.rentedCars.push(foundCar._id)
                user.save().then(()=>{
		    foundCar.isRendet = true
                    foundCar.save().then(()=>{
                        const rentedcar = new RentedCarInfo({
                            car: foundCar._id,
                            user: userid,
                            date: req.body.date,
                            days: req.body.days
                        })
			rentedcar.save()
    			.then(data => {
        			res.send(data);
    			}).catch(err => {
        		res.status(500).send({
            		message: err.message || "Some error occurred creating rented car."
 		       });
    			});
                    })
                })
            })
        })
}