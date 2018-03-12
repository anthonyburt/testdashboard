const express = require('express');
const router = express.Router();

const statsService = require('../stats-service');

router.get('/stats', (req, res) => {
  statsService.get(req, res);
});


module.exports = router;
