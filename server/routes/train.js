const router = require("express").Router();
const {
  getTrains,
  postTrain,
  getTrain,
  deleteTrain,
} = require("../controllers/train");
const { isAdmin, isAuthenticated } = require("../middlewares/auth");

router.get("/", getTrains);
router.post("/", isAdmin, postTrain);
router.get("/:id", getTrain);
router.delete("/", isAdmin, deleteTrain);

module.exports = router;
