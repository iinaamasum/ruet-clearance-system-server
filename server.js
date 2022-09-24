const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 5001;

//mongoose mongodb database connection
mongoose.connect(process.env.DB_URL).then(() => {
  console.log('DB Connected');
});

//listening to the app
app.listen(port, () => {
  console.log(`app is running at port ${port}`);
});
