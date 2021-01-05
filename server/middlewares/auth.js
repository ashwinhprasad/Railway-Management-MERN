const user = require("../models/user");
const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return res.json({ msg: "User is not authenticated" });

  next();
};

const isAdmin = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return res.json({ msg: "user is not authenticated" });

  try {
    const decoded = jwt.verify(token, process.env.TOKENKEY);
  } catch {
    return res.json({ msg: "Invalid Token" });
  }

  const User = user.findOne({ email: decoded.email });

  if (!User) return res.json({ msg: "User Does not Exist" });

  if (!User.is_admin) return res.json({ msg: "User is not admin" });

  next();
};

module.exports = { isAdmin, isAuthenticated };
