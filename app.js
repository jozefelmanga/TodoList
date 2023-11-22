require("dotenv").config();

var express = require("express");
const connectDB = require("./config/mongoDB");
var bodyParser = require("body-parser");
const todoRouter = require("./routes/TodoRoutes");
const errorHandler = require('./middlewares/errorHandler');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Connect to the database
connectDB();

app.use("/api/todos", todoRouter);

// Error handling middleware
app.use(errorHandler);

//listen to port
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
