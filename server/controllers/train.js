// loading necessary modules
const train = require("../models/trains");

/*
method: GET
route : api/train/
description: returns all the trains
*/
const getTrains = async (req, res) => {
  await train
    .find({})
    .sort({ startDate: -1 })
    .then((trains) => {
      return res.status(200).json({
        trains,
      });
    })
    .catch((err) => console.log(err));
};

/*
method: POST
route : api/train/
description: adds a new train
*/
const postTrain = async (req, res) => {
  const {
    name,
    destination,
    startpoint,
    startDate,
    reachDate,
    price,
  } = req.body;

  // validation
  if (
    !name ||
    !destination ||
    !startpoint ||
    !startDate ||
    !reachDate ||
    !price
  )
    return res.status(400).json({ msg: "enter all the credentials" });

  const duplicateCheck = await train.findOne({
    name,
  });

  if (duplicateCheck)
    return res.json({ msg: "train with same name already exists" });

  // add new train
  const newTrain = await new train({
    name,
    destination,
    startpoint,
    startDate,
    reachDate,
    price,
  });

  newTrain
    .save()
    .then((train) => {
      return res.status(200).json({
        name: train.name,
        users: train.populate("users").users,
        destination: train.destination,
        startpoint: train.startpoint,
        startDate: train.startDate,
        reachDate: train.reachDate,
        price: train.price,
      });
    })
    .catch((err) => console.log(err));
};

/*
method: GET
route : api/train/:id
description: returns a single train based on id
*/
const getTrain = async (req, res) => {
  const { id } = req.params;

  //validation
  if (!id) return res.status(400).json({ msg: "Id not found" });

  const outTrain = await train.findOne({
    _id: id,
  });

  if (!outTrain) return res.json({ msg: "Train Does not exist" });

  res.json({
    id: outTrain._id,
    name: outTrain.name,
    users: outTrain.users,
    destination: outTrain.destination,
    startpoint: outTrain.startpoint,
    startDate: outTrain.startDate,
    reachDate: outTrain.reachDate,
    price: outTrain.price,
  });
};

/*
method: DELETE
route: /api/train/
description: deletes a train based on id
*/
const deleteTrain = async (req, res) => {
  const { id } = req.body;

  // validation
  if (!id) return res.status(400).json({ msg: "id not found" });

  const traindel = await train.findOne({
    _id: id,
  });

  if (!traindel) return res.json({ msg: "Id invalid" });

  await traindel
    .deleteOne()
    .then((train) =>
      res.json({
        train,
      })
    )
    .catch((err) => console.log(err));
};

module.exports = { getTrains, postTrain, getTrain, deleteTrain };
