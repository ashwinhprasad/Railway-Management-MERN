const router = require("express").Router();
const {
  createBook,
  getBooks,
  deleteBook,
  getBook,
} = require("../controllers/book");

const { isAdmin, isAuthenticated } = require("../middlewares/auth");

router.post("/", isAuthenticated, createBook);
router.get("/", isAuthenticated, getBooks);
router.get("/:id", isAuthenticated, getBooks);
router.delete("/:id", isAuthenticated, deleteBook);

module.exports = router;
