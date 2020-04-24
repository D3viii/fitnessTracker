const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 27017;

const app = express();

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout",
    { useNewUrlParser: true }
)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require('./routes/htmlRoutes')(app);
require('./routes/workoutRoutes')(app);

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
  });