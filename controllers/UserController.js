const AppError = require("../Utils/AppError");
const { catchAsync, filterObj } = require("../Utils/utils");

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  });

exports.getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    let filter = { _id: req.params.id };

    const doc = await Model.find(filter);

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: doc,
    });
  });

exports.getAll = (Model, filter = {}) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.find(filter);

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: doc,
    });
  });

exports.updateOne = (Model) => {
  return catchAsync(async (req, res, next) => {
    let data = {};
    const filteredBody = filterObj(
      req.body,
      "name",
      "description",
      "gender",
      "emailId",
      "photo",
      "website",
      "mobile_number",
    );

    Object.keys(filteredBody).forEach((el) => (data[el] = filteredBody[el]));
    const doc = await Model.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: doc,
    });
  });
};

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    let data = {};
    const filteredBody = filterObj(
      req.body,
      "name",
      "description",
      "gender",
      "emailId",
      "role",
      "photo",
      "website",
      "mobile_number",
    );

    Object.keys(filteredBody).forEach((el) => (data[el] = filteredBody[el]));

    const doc = await Model.create(data);

    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });
