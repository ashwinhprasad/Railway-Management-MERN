const book = require("../models/book");
const user = require("../models/user");
const train = require("../models/trains");

/*
method: POST
route: /api/book/
description: creates a booking
*/
const createBook = async (req, res) => {
  // details from body
  const { train_id, user_id } = req.body;

  // validation
  if (!train_id || !user_id)
    return res.json({ msg: "please enter all the fields" });

  const train_available = await train.findOne({ _id: train_id });
  const user_available = await user.findOne({ _id: user_id });
  if (!train_available) return res.json({ msg: "train_id not valid" });
  if (!user_available) return res.json({ msg: "user id not valid" });

  // creating and saving a booking
  const newBook = new book({
    user: user_available._id,
    train: train_available._id,
  });

  await newBook
    .save()
    .then((book) => {
      res.json({ book });
    })
    .catch((err) => {
      res.json({ err });
    });

  // updating the train's users
  await train_available
    .updateOne({
      users: [...train_available.users, user_available._id],
    })
    .catch((err) => {
      console.log(err);
    });
};

/*
method: GET
route: /api/book/
description: gets all bookings
*/
const getBooks = (req, res) => {
  book
    .find()
    .sort({ startDate: -1 })
    .then((books) => {
      res.json({
        books,
      });
    })
    .catch((err) => console.log(err));
};

/*
method: DELETE
route: /api/book/:id
description: deletes a booking
*/
const deleteBook = async (req, res) => {
  const { id } = req.params;

  const bookExist = await book.findOne({ _id: id });

  if (!bookExist) return res.json({ msg: "Book does not exist" });

  // getting the train id and user id
  const user_id = bookExist.user;
  const train_id = bookExist.train;

  trainExist = await train.findOne({ _id: train_id });
  let usersOfTrain = [...trainExist.users];

  usersOfTrain = usersOfTrain.filter((user) => {
    return String(user_id) != String(user);
  });

  //removing element from train
  trainExist
    .updateOne({
      users: usersOfTrain,
    })
    .catch((err) => res.json({ err }));

  // deleting the booking
  await bookExist
    .deleteOne()
    .then((book) => {
      res.json({
        book,
      });
    })
    .catch((err) => res.json({ err }));
};

/*
method: GET
route: /api/book/:id
description: gets a single booking
*/
const getBook = async (req, res) => {
  const { id } = req.params;

  const bookExist = await book.findOne({ _id: id });

  if (!bookExist) return res.json({ msg: "Booking does not exist" });

  res.json({
    booking_id: bookExist._id,
    train_id: bookExist.train,
    user_id: bookExist.user,
  });
};

module.exports = { createBook, getBooks, deleteBook, getBook };
