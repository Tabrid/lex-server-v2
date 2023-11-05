import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: [true, " Name required!"],
  },
  type: {
    type: String,
    required: [true, "Type required!"],
  },
  description: {
    type: String,
    required: [true, "Description required!"],
  },
});

const ServiceModel = mongoose.model("Service", ServiceSchema);

export default ServiceModel;
