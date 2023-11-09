import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  LawyerId: String,
  specialization: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  }	,

});

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

export default Bookmark;
