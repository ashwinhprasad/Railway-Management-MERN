const { loginUser, logoutUser } = require("../controllers/auth");
const router = require("express").Router();

router.post("/login", loginUser);
router.get("/logout", logoutUser);

module.exports = router;
