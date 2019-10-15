const mongoose = require('mongoose');
const User = require('mongoose').model('User');
const Car = require('mongoose').model('Car');
const ObjectId = mongoose.Schema.Types.ObjectId
const rentedcarSchema = new mongoose.Schema({
    car: {type: ObjectId, ref: 'Car'},
    user: {type: ObjectId, ref: 'User'},
    date: {type: Date},
    days: {type: Number}, 
})
module.exports = mongoose.model('RentedCarInfo', rentedcarSchema);