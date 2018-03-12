const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testResultsSchema = new Schema({
    duration: Number,
    status: Boolean,
    start_date: Date,
    end_date: Date

});

const TestResults = mongoose.model('ecommresults', testResultsSchema);
module.exports = TestResults;
