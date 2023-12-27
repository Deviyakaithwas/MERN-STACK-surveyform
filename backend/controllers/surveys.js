const Survey = require('../models/Survey');

exports.submitSurvey = async (req, res) => {
  try {
    const survey = new Survey(req.body);
    await survey.save();
    res.json({ message: 'Survey submitted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error submitting survey' });
  }
};
