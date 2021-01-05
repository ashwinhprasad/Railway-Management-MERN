const router = require("express").Router();
const {
  createUser,
  getUser,
  getAllUsers,
  deleteUser,
} = require("../controllers/user");

router.post("/", createUser);
router.get("/:id", getUser);
router.get("/", getAllUsers);
router.delete("/:id", deleteUser);

module.exports = router;
