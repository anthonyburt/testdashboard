const TestResults = require('./testresults-model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function getTestResult(req, res) {
    var tribe_param = req.query.tribe;
    var category_param = req.query.category;
    var harness_param = req.query.harness;
    var result_param = req.query.status;
    var startdate_param = req.query.startdate;
    var enddate_param = req.query.enddate;
    var testcase_param = req.query.testcase;

    const queryAllStatusAndAllService = TestResults.aggregate([
        {
            $match: {
                tribe: tribe_param,
                harness: harness_param,
                date: {$gte: startdate_param, $lte: enddate_param}
           }
        }, {
            $sort: {
                dateofexecution: -1
            }
        }, {
            $project:{
                _id: 1,
                result: 1,
                author: 1,
                testcase: 1,
                description: 1,
                harness: 1,
                duration: 1,
                dateofexecution: 1,
                teststeps: 1,
                testcase: 1,
                category: 1,
                squad: 1,
                responseJson: 1,
                tribe: 1
            }
        }
    ]);

    const queryAllStatus = TestResults.aggregate([
        {
            $match: {
                tribe: tribe_param,
                harness: harness_param,
                category: category_param,
                date: {$gte: startdate_param, $lte: enddate_param}
           }
        }, {
            $sort: {
                dateofexecution: -1
            }
        }, {
            $project:{
                _id: 1,
                result: 1,
                author: 1,
                testcase: 1,
                description: 1,
                harness: 1,
                duration: 1,
                dateofexecution: 1,
                teststeps: 1,
                testcase: 1,
                category: 1,
                squad: 1,
                responseJson: 1,
                tribe: 1
            }
        }
    ]);

    const queryAllCategory = TestResults.aggregate([
        {
            $match: {
                tribe: tribe_param,
                harness: harness_param,
                result: result_param,
                date: {$gte: startdate_param, $lte: enddate_param}
           }
        }, {
            $sort: {
                dateofexecution: -1
            }
        }, {
            $project:{
                _id: 1,
                result: 1,
                author: 1,
                testcase: 1,
                description: 1,
                harness: 1,
                duration: 1,
                dateofexecution: 1,
                teststeps: 1,
                testcase: 1,
                category: 1,
                squad: 1,
                responseJson: 1,
                tribe: 1
            }
        }
    ]);

    const querySpecificStatusAndCategory = TestResults.aggregate([
        {
            $match: {
                tribe: tribe_param,
                harness: harness_param,
                category: category_param,
                result: result_param,
                date: {$gte: startdate_param, $lte: enddate_param}
           }
        }, {
            $sort: {
                dateofexecution: -1
            }
        }, {
            $project:{
                _id: 1,
                result: 1,
                author: 1,
                testcase: 1,
                description: 1,
                harness: 1,
                duration: 1,
                dateofexecution: 1,
                teststeps: 1,
                testcase: 1,
                category: 1,
                squad: 1,
                responseJson: 1,
                tribe: 1
            }
        }
    ]);

    const queryTestCase = TestResults.aggregate([
            {
                $match: {
                    tribe: tribe_param,
                    harness: harness_param,
                    testcase: testcase_param,
                    category: category_param
               }
            }, {
                $sort: {
                    dateofexecution: -1
                }
            }, {
                $project:{
                    _id: 1,
                    result: 1,
                    author: 1,
                    testcase: 1,
                    description: 1,
                    harness: 1,
                    duration: 1,
                    dateofexecution: 1,
                    teststeps: 1,
                    testcase: 1,
                    category: 1,
                    squad: 1,
                    responseJson: 1,
                    tribe: 1
                }
            }
        ]);

    if(result_param === 'All' && category_param === 'All'){
        queryAllStatusAndAllService
            .exec()
            .then(stats => {
                res.json(stats);
            })
            .catch(err => {
            res.status(500).send(err);
        });
    } else if (testcase_param !== undefined) {
        queryTestCase
            .exec()
            .then(stats => {
                res.json(stats);
            })
            .catch(err => {
            res.status(500).send(err);
        });
    } else if (result_param === 'All' && category_param !== 'All') {
        queryAllStatus
            .exec()
            .then(stats => {
                res.json(stats);
            })
            .catch(err => {
            res.status(500).send(err);
        });
    } else if (result_param !== 'All' && category_param === 'All') {
        queryAllCategory
            .exec()
            .then(stats => {
                res.json(stats);
            })
            .catch(err => {
            res.status(500).send(err);
        });
    } else {
        querySpecificStatusAndCategory
            .exec()
            .then(stats => {
                res.json(stats);
            })
            .catch(err => {
            res.status(500).send(err);
        });
    }
}

function pie(req, res) {
    var tribe_param = req.query.tribe;
    var harness_param = req.query.harness;
    var category_param = req.query.category;

    const queryPie = TestResults.aggregate(
        [
            {
                 $match: {
                     tribe: tribe_param,
                     harness: harness_param,
                     category: category_param
                 }
            },
            {"$group":{
                        "_id":{"result": "$result"},
                        "test_count":{"$sum": 1}
            }}
        ]
    );

    queryPie
        .exec()
        .then(stats => {
            res.json(stats);
        })
        .catch(err => {
        res.status(500).send(err);
    });

}

function getLastSyncTime(req, res) {
    var tribe_param = req.query.tribe;
    var harness_param = req.query.harness;
    var category_param = req.query.category;

    const all = TestResults.find( {}, {"date":1, _id:0}).sort({"date": -1}).limit(1);

    const categoryLastSync = TestResults.find( {"tribe": tribe_param, "harness": harness_param, "category": category_param}, {date: 1, _id: 0 }).sort({"date": -1}).limit(1);

    if(category_param !== undefined){
        categoryLastSync
            .exec()
            .then(stats => {
                res.json(stats);
            })
            .catch(err => {
            res.status(500).send(err);
        });
    } else {
        all
            .exec()
            .then(stats => {
                res.json(stats);
            })
            .catch(err => {
            res.status(500).send(err);
        });
    }
}

module.exports = { getTestResult, pie, getLastSyncTime };
