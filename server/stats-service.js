const TestResults = require('./testresults-model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function getOverallHistory(req, res) {

    const docquery = TestResults.aggregate(
        [{
            $group: {
                _id: "null",
                "total_duration": {
                    $sum: "$duration"
                },
                "total_tests": {
                    $sum: 1 },
                "total_passes": {
                    $sum: {
                        $cond : {
                            if: { $eq: ["$status", true]}, then: 1, else: 0 }
                    }
                },
                "total_fails": {
                    $sum: {
                        $cond : {
                            if: { $eq: ["$status", false]}, then: 1, else: 0 }
                    }
                }
            }
        }]
    );

    docquery
        .exec()
        .then(stats => {
            res.json(stats);
        })
        .catch(err => {
        res.status(500).send(err);
    });
}

function getQuickLookLineGraphTestDuration(req, res) {

    const docquery = TestResults.aggregate(
        [
            {
                $group: {
                    _id: { harness: "$harness", x: { $dateToString: { format: "%Y-%m-%d", date: "$end_date" } } },
                    total_time:{ $sum: "$duration"}
                }
            },
                { $group: {
                    _id: "$_id.harness",
                    v: { $push: {x: "$_id.x", y: "$total_time"}}
                }
            },
             { $sort: {
                                    "x": 1
                                }
                            },
            {
                $group: {
                    _id: "",
                    data: {$push: "$$ROOT"}
                }
            }
        ]
    );

    docquery
        .exec()
        .then(stats => {
            res.json(stats);
        })
        .catch(err => {
        res.status(500).send(err);
    });
}

module.exports = { getOverallHistory, getQuickLookLineGraphTestDuration };
