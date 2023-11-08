import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    trim: true,
  },
//   password: {
//     type: String,
//     required: true,
//   },
//   resetPasswordToken: {
//     type: String,
//     default: null,
//   },
//   resetPasswordExpires: {
//     type: Date,
//     default: null,
//   },
  image: {
    type: String, 
  },
  address: {
    type: String, 
  },
  phoneNumber: {
    type: String,
  },
  role: {
    type: String,
    default: "USER",
    enum: [
      "ADMIN",
        "USER",
        "STUDENT",
      "LAWYER"
    ],
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
