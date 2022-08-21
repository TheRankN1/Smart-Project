const mongoose = require('mongoose');

const servicesSchema = mongoose.Schema({
    Name: String,
    Unit: String,
    Value: Number,
    Currency: String,
});

const servicesCollection = mongoose.model("Services", servicesSchema);
module.exports = servicesCollection;