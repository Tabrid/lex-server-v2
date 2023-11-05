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
    type: String, // Store the image as a URL
    default: "default_image_url.jpg",
    required:true, // You can set a default image URL
  },
});

const Lawyer = mongoose.model("Lawyer", lawyerSchema);

export default Lawyer;
