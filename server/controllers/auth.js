// importing the modules
const user = require("../models/user");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
require("dotenv").config();

/*
method:POST
route:/api/auth/login
description: loging in an user
*/
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // verification
  if (!email || !password)
    return res.json({ msg: "please enter all the credentials" });

  // does user exist
  const userExist = await user.findOne({ email });
  if (!userExist)
    return res.json({ msg: "user does not exist. please sign up" });

  // password validation
  if (
    userExist.encry_password !=
    crypto.createHmac("sha256", userExist.salt).update(password).digest("hex")
  )
    return res.json({ msg: "invalid password" });

  // creating token and setting cookie in the browser
  const token = jwt.sign({ email: userExist.email }, process.env.TOKENKEY);

  res
    .cookie("token", token, {
      httpOnly: false,
    })
    .json({
      email: userExist.email,
      name: userExist.name,
      is_admin: userExist.is_admin,
      token: token,
      id: userExist._id,
      phone: userExist.phone,
    });
};

/*
method:GET
route:/api/auth/logout
description: logout the user
*/
const logoutUser = async (req, res) => {
  // clear the cookies in the browser
  res.clearCookie("token").json({
    msg: "Logout Successful",
  });
};

module.exports = { loginUser, logoutUser };
