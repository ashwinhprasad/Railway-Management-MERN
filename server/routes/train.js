const router = require("express").Router();
const {
  getTrains,
  postTrain,
  getTrain,
  deleteTrain,
} = require("../controllers/train");

router.get("/", getTrains);
router.post("/", postTrain);
router.get("/:id", getTrain);
router.delete("/", deleteTrain);

module.exports = router;
