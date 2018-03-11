const TestResults = require('./testresults-model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function get(req, res) {

    //const queryIWant = TestResults.aggregate([{ $group: { _id: "null", "total_duration": { $sum: "$duration" }, "total_tests": { $sum: 1 }, "total_passes": { $sum: { $cond : { if: { $eq: ["$status", true]}, then: 1, else: 0 } } }, "total_fails": { $sum: { $cond : { if: { $eq: ["$status", false]}, then: 1, else: 0 } } } } } ]).pretty();

    const docquery = TestResults.aggregate([ {$group: { _id: null, count: { $sum: 1} } } ]);
    docquery
        .exec()
        .then(stats => {
            res.json(stats);
        })
        .catch(err => {
        res.status(500).send(err);
    });
}

module.exports = { get };
