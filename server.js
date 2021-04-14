const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Use the routes defined in the two route files 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// installed my connection from atlas with my name and password
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://user:onetwothree123@cluster0.m9dxf.mongodb.net/workout?retryWrites=true&w=majority", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});