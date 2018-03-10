const TestResults = require('./testresults-model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function get(req, res) {
  const docquery = TestResults.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(restaurants => {
      res.json(restaurants);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function create(req, res) {
  const { id, testname, status } = req.body;

  const testResult = new Restaurants({ id, name, cuisine });
  testResult
    .save()
    .then(() => {
      res.json(testResult);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function update(req, res) {
  const { id, testname, status } = req.body;

  TestResults.findOne({ id })
    .then(testResult => {
      testResult.id = name;
      testResult.testname = cuisine;
      testResult.save().then(res.json(testResult));
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function destroy(req, res) {
  const { id } = req.params;

  TestResults.findOneAndRemove({ id })
    .then(testResult => {
      res.json(testResult);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

module.exports = { get, create, update, destroy };
