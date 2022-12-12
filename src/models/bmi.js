const mongoose = require('mongoose');

const bmiSchema = mongoose.Schema({
    userId: String,
    height: Number,
    weight: Number,
    userBmi: Number
});

const BmiModel = mongoose.model('bmi', bmiSchema);

module.exports = BmiModel;