const express = require('express');
const router = express.Router();
const surveysController = require('../controllers/surveys');

router.post('/submit', surveysController.submitSurvey);

module.exports = router;
