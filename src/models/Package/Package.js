// packageModel.js
import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  features: [String],
});

const Package = mongoose.model("Package", packageSchema);

export default Package;
