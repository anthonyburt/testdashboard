const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testResultsSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    duration: Number,
    status: Boolean
});

const TestResults = mongoose.model('ecommresults', testResultsSchema);
module.exports = TestResults;
