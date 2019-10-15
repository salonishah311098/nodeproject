const mongoose = require('mongoose');
const CarSchema = mongoose.Schema({
    model: String,
    vno: String,
    sc: Number,
    rent: Number,
    city: String,
    isRendet: {type: Boolean, required: true, default: false}
}, {
    timestamps: true
});
module.exports = mongoose.model('Car', CarSchema);