const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const ResponseModel = require("../models/ResponseModel");

const verifyToken = (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header && header.split("Bearer ")[1];
  if (!token)
    return res.send(ResponseModel.createNotFoundResponse("No token provided"));

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err)
      return res.send(ResponseModel.createErrorResponse("Invalid token", err));

    req.user = {};
    req.user.id = decoded._id;
    next();
  });
};

module.exports = { verifyToken };
