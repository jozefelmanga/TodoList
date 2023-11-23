require("dotenv").config();

var express = require("express");
const connectDB = require("./config/mongoDB");
var bodyParser = require("body-parser");
const todoRouter = require("./routes/TodoRoutes");
const userRouter = require("./routes/UserRoutes");
const errorHandler = require('./middlewares/errorHandler');
const UserModel=require("./models/UserModel")
const cors = require('cors');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Connect to the database
connectDB();

app.use("/api/todos", todoRouter);
app.use("/api/users", userRouter);

// Error handling middleware
app.use(errorHandler);

//listen to port
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
