const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const ResponseModel = require("../models/ResponseModel");

class UserServices {
  static async registerUser(email, password) {
    return UserServices.handleOperation(async () => {
      const createUser = new UserModel({ email, password });
      const savedUser = await createUser.save();
      return ResponseModel.createSuccessResponse('User registered successfully', savedUser);
    });
  }

  static async getUserByEmail(email) {
    return UserServices.handleOperation(async () => {
      const user = await UserModel.findOne({ email });
      if (user) {
        return ResponseModel.createSuccessResponse('User found', user);
      } else {
        return ResponseModel.createNotFoundResponse('User not found');
      }
    });
  }

  static async checkUser(email, password) {
    return UserServices.handleOperation(async () => {
      const user = await UserModel.findOne({ email });
      if (!user) {
        return ResponseModel.createNotFoundResponse('User not found');
      }

      const isPasswordCorrect = await user.comparePassword(password);
      if (!isPasswordCorrect) {
        return ResponseModel.createErrorResponse('Invalid password', 'Password does not match');
      }

      // Generate Token
      const tokenData = { _id: user._id, email: user.email };
      const token = await UserServices.generateAccessToken(tokenData, "secret", "1h");

      return ResponseModel.createSuccessResponse('Login successful', { token });
    });
  }

  static async generateAccessToken(tokenData, JWTSecret_Key, JWT_EXPIRE) {
    return jwt.sign(tokenData, JWTSecret_Key, { expiresIn: JWT_EXPIRE });
  }

  static handleOperation(operation) {
    try {
      return operation();
    } catch (error) {
      console.error("Error performing user operation:", error);
      return ResponseModel.createErrorResponse("Operation failed", error.message);
    }
  }
}

module.exports = UserServices;
