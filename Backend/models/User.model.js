const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["user", "admin", "seller"],
      default: "user",
    },
    phone: {
      type: String,
      trim: true,
    },
    dateJoined: {
      type: Date,
      default: Date.now,
    },
    avatar: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
const user = mongoose.model("user", UserSchema);
module.exports = user;
