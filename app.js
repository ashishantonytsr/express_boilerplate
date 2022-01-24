require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

// importing middlewares from middlewares folder
const notFoundMiddleware = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/error-handler");

// importing route functions from routes folder
const mainRouter = require("./routes/main");

// Build-in middlewares
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1", mainRouter);

// error middlwares
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

// import Server & DB connection credentials
const connectDB = require("./db/connect");
const port = process.env.PORT || 3000;
const mongo_uri = process.env.MONGO_URI;

// define async fn start
const start = async () => {
  try {
    console.log("Connecting to Database ... ");
    await connectDB(mongo_uri);
    app.listen(port, () => console.log(`Server is listening to port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

// invoke start
start();
