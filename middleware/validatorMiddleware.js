const { validationResult } = require("express-validator");
const { check } = require("express-validator");

exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  next();
};

exports.userValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("description").not().isEmpty().withMessage("Description is required"),
  check("gender").not().isEmpty().withMessage("Gender is required"),
  check("emailId").isEmail().withMessage("Must be a valid email address"),
  check("mobile_number")
    .isMobilePhone("any")
    .withMessage("Must be a valid Phone number"),
];
