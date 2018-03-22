const TestResults = require('./testresults-model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function getOverallHistory(req, res) {

    const docquery = TestResults.aggregate([
            {
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
                                if: { $eq: ["$result", "Passed"]}, then: 1, else: 0 }
                        }
                    },
                    "total_fails": {
                        $sum: {
                            $cond : {
                                if: { $eq: ["$result", "Failed"]}, then: 1, else: 0 }
                        }
                    },
                    "total_skipped": {
                        $sum: {
                            $cond : {
                                if: { $eq: ["$result", "Skipped"]}, then: 1, else: 0 }
                        }
                    },
                    "total_inconclusive": {
                        $sum: {
                            $cond : {
                                if: { $eq: ["$result", "Inconclusive"]}, then: 1, else: 0 }
                        }
                    }
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

function getQuickLookLineGraphTestStatus(req, res) {

    const docquery = TestResults.aggregate(
        [
            { "$sort": { "result": 1 } },
            {
                $group: {
                    _id: { result: "$result", x:  "$date"  },
                    total_status:{ $sum: 1}
                }
            },
                { $group: {
                    _id: "$_id.result",
                    v: { $push: {x: "$_id.x", y: "$total_status"}}
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

function getLastSyncTime(req, res) {

    const docquery = TestResults.find( {}, {"date":1, _id:0}).sort({"date": -1}).limit(1);

    docquery
        .exec()
        .then(stats => {
            res.json(stats);
        })
        .catch(err => {
        res.status(500).send(err);
    });
}

function getTotalTestRuns(req, res) {

    const docquery = TestResults.aggregate([
        {"$sort": { "squad": 1 } },
        {"$group":{
            "_id":{"harness": "$harness","squad": "$squad"},
            "test_count":{"$sum": 1}
        }},
        {"$group":{
            "_id": "$_id.harness",
            "v":{"$push":{ "squad":"$_id.squad", "test_count":"$test_count", "label": "$_id.harness"}}
        }},
        {"$group": {
            "_id": "",
            "data": {"$push": "$$ROOT"}
        }}
    ]);

    docquery
        .exec()
        .then(stats => {
            res.json(stats);
        })
        .catch(err => {
        res.status(500).send(err);
    });
}


module.exports = { getOverallHistory, getQuickLookLineGraphTestStatus, getLastSyncTime, getTotalTestRuns };
