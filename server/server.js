// importing the modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// app config
const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// routes
app.use("/api/train", require("./routes/train"));
app.use("/api/user", require("./routes/user"));
app.use("/api/book", require("./routes/book"));
app.use("/api/auth", require("./routes/auth"));

// mongodb
mongoose
  .connect("mongodb://localhost:27017/railway", {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log(`Database Connection Established at ${27017}`))
  .catch((err) => console.log(err));

//port
const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, () => console.log(`server started at ${PORT}`));
