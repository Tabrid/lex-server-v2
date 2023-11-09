// lawyerModel.js
import mongoose from "mongoose";

const lawyerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  description: String,
  contact: {
    email: String,
    phone: String,
  },
  image: {
    type: String,
    required: true,
  },
});

const Lawyer = mongoose.model("Lawyer", lawyerSchema);

export default Lawyer;
