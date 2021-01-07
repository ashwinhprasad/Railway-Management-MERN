const router = require("express").Router();
const {
  createUser,
  getUser,
  getAllUsers,
  deleteUser,
  returnCurrentUser,
} = require("../controllers/user");

router.post("/", createUser);
router.get("/:id", getUser);
router.get("/", getAllUsers);
router.delete("/:id", deleteUser);
router.get("/return/current", returnCurrentUser);

module.exports = router;
