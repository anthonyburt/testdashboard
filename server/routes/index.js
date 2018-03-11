const express = require('express');
const router = express.Router();

const testResultsService = require('../testresults-service');

router.get('/stats', (req, res) => {
  testResultsService.get(req, res);
});


module.exports = router;
