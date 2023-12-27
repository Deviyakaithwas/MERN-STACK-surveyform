const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const surveyRoutes = require('./routes/surveys');

const app = express();

mongoose.connect('mongodb://localhost:27017/surveyapp', { useNewUrlParser: true });
app.use(bodyParser.json());
app.use('/surveys', surveyRoutes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
