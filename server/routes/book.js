const router = require("express").Router();
const {
  createBook,
  getBooks,
  deleteBook,
  getBook,
} = require("../controllers/book");

router.post("/", createBook);
router.get("/", getBooks);
router.get("/:id", getBooks);
router.delete("/:id", deleteBook);

module.exports = router;
