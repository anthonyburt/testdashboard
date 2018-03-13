const express = require('express');
const router = express.Router();

const statsService = require('../stats-service');

router.get('/stats/quicklook', (req, res) => {
  statsService.getOverallHistory(req, res);
});

router.get('/stats/linegraphduration', (req, res) => {
  statsService.getQuickLookLineGraphTestDuration(req, res);
});


module.exports = router;
