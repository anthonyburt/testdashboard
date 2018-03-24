const TestResults = require('./testresults-model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function getTestResult(req, res) {
    var squad_param = req.query.squad;
    var harness_param = req.query.harness;
    var result_param = req.query.status;
    var startdate_param = req.query.startdate;
    var enddate_param = req.query.enddate;

    const queryAllStatus = TestResults.aggregate([
        {
            $match: {
                squad: squad_param,
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
                teststeps: 1
            }
        }
    ]);

    const querySpecificStatus = TestResults.aggregate([
        {
            $match: {
                squad: squad_param,
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
                teststeps: 1
            }
        }
    ]);

    if(result_param === 'All'){
        queryAllStatus
            .exec()
            .then(stats => {
                res.json(stats);
            })
            .catch(err => {
            res.status(500).send(err);
        });
    } else {
        querySpecificStatus
            .exec()
            .then(stats => {
                res.json(stats);
            })
            .catch(err => {
            res.status(500).send(err);
        });
    }



}

module.exports = { getTestResult };
