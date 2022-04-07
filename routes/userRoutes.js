const router = require("express").Router();
const {
  deleteOne,
  createOne,
  getOne,
  getAll,
  updateOne,
} = require("../controllers/UserController");
const {
  runValidation,
  userValidator,
} = require("../middleware/validatorMiddleware");
const User = require("../model/users");

router
  .route("/")
  .get(getAll(User))
  .post(userValidator, runValidation, createOne(User));

router
  .route("/:id")
  .get(getOne(User))
  .patch(userValidator, runValidation, updateOne(User))
  .delete(deleteOne(User));

module.exports = router;
