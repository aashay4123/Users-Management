const userRouter = require("./userRoutes");

module.exports = (app) => {
  app.use("/api/user", userRouter);
};
