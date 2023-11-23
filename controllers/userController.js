const UserServices = require("../services/UserService");

exports.register = async (req, res, next) => {
  const { email, password } = req.body;
  const response = await UserServices.registerUser(email, password);
  res.status(response.success ? 200 : 400).json(response);
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    const response = await UserServices.checkUser(email, password);
    res.status(response.success ? 200 : 404).json(response);
  };
