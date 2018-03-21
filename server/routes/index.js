const express = require('express');
const router = express.Router();

const statsService = require('../stats-service');
const testResultService = require('../testresults-service');

router.get('/stats/quicklook', (req, res) => {
  statsService.getOverallHistory(req, res);
});

router.get('/stats/linegraphstatus', (req, res) => {
  statsService.getQuickLookLineGraphTestStatus(req, res);
});

router.get('/stats/lastsync', (req, res) => {
  statsService.getLastSyncTime(req, res);
});

router.get('/stats/totaltestruns', (req, res) => {
  statsService.getTotalTestRuns(req, res);
});

router.get('/test/', (req, res) => {
  testResultService.getTestResult(req, res);
});

module.exports = router;
