const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      maxlength: 265,
      trim: true,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    photo: {
      type: String,
      default: "default.png",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
      required: true,
    },
    website: {
      type: String,
    },
    phone_no: Number,
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", UserSchema);
