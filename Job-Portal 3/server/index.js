const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");
var cors = require("cors");

// import routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const jobTypeRoutes = require("./routes/jobTypeRoutes");
const jobsRoutes = require("./routes/jobsRoutes");

// dotenv.config();
dotenv.config();

// database connection
const MONGODB_URL = process.env.DATABASE;

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database connected successfully!"))
  .catch((error) => console.log(error));

// middlewares
app.use(morgan("dev"));
app.use(
  bodyParser.json({
    extended: true,
    limit: "5mb",
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "5mb",
    encodeURI: true,
  })
);
app.use(cookieParser());
app.use(cors({ origin: '*' }));

// routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", jobTypeRoutes);
app.use("/api", jobsRoutes);

// error middleware
app.use(errorHandler);

// port
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
