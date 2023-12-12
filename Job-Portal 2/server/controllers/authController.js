const User = require("../models/userModel");
const ErrorResponse = require("../utils/errorResponse");

// Sign up
exports.signup = async (req, res, next) => {
  const { email } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    return next(new ErrorResponse("E-mail already exist", 400));
  }
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

// Sign in
exports.signin = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body)

  try {
    // validation
    if (!email) {
      return next(new ErrorResponse("Email is required", 403));
    }
    if (!password) {
      return next(new ErrorResponse("Password is required", 403));
    }

    // check user email
    const user = await User.findOne({ email });
    if (!user) {
      return next(new ErrorResponse("User not exist", 400));
    }

    // check password
    const isMatched = await user.comparePassword(password);
    if (!isMatched) {
      return next(new ErrorResponse("Password is invalid", 400));
    }

    sendTokenResponse(user, 200, res);
  } catch (error) {
    next(error);
  }
};

// Send token
const sendTokenResponse = async (user, codeStatus, res) => {
  const token = await user.getJwtToken();
  res
    .status(codeStatus)
    .cookie("token", token, { maxAge: 60 * 60 * 1000, httpOnly: true })
    .json({ success: true, token, user });
};

// Logout
exports.logout = (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "logged out",
  });
};

// User profile
exports.userProfile = async (req, res, next) => {
  
  //req.user is come from auth.js
  const user = await User.findById(req.user.id).select("-password");

  res.status(200).json({
    success: true,
    user,
  });
};
