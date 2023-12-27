const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  // ...other survey fields
});

module.exports = mongoose.model('Survey', surveySchema);
