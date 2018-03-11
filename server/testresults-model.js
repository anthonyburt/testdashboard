const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testResultsSchema = new Schema({
    duration: Number,
    status: Boolean
});

const TestResults = mongoose.model('ecommresults', testResultsSchema);
module.exports = TestResults;
