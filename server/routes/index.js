const express = require('express');
const router = express.Router();

const testResultsService = require('../testresults-service');

router.get('/testresults', (req, res) => {
  restaurantsService.get(req, res);
});

router.put('/testresults', (req, res) => {
  restaurantsService.create(req, res);
});

router.post('/testresults', (req, res) => {
  restaurantsService.update(req, res);
});

router.delete('/testresults/:id', (req, res) => {
  restaurantsService.destroy(req, res);
});

module.exports = router;
