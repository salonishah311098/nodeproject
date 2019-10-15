const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const UserSchema = mongoose.Schema({
    fname: String,
    lname: String,
    cno: Number,
    rentedCars:[{type: ObjectId, ref: 'Car'}]
}, {
    timestamps: true
});
module.exports = mongoose.model('User', UserSchema);