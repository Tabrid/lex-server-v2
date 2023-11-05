import mongoose from "mongoose";

const LawDataSchema = new mongoose.Schema({
    Problem: {
    type: String,
    required: [true, " Problem   required!"],
  },
  Victims: {
    type: String,
    required: [true, "Victims required!"],
  },
  Query: {
    type: String,
    required: [true, "Query required!"],
  },
  Suggestions: {
    type: String,
    required: [true, "Suggestions required!"],
  },
  Law: {
    type: String,
    required: [true, "Law required!"],
  },
});

const LawDataModel = mongoose.model("LawData", LawDataSchema);

export default LawDataModel;
