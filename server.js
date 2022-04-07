const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const protocol = require("http").createServer(app);

require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected"))
  .catch((err) => console.log("Couldn't connect to Mongodb", err));

mongoose.Promise = global.Promise;
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: process.env.REACT_APP_BASE_URL,
  }),
);

const routes = require("./routes/routes");

routes(app);

// TODO: Add all routes handler

// TODO: Add users model

// TODO: Add Global Error handler

// ASSIGN PORT AND START SERVER
const port = process.env.PORT;
protocol.listen(port, () => {
  console.log(`Api is running on port ${port} - ${process.env.NODE_ENV}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
