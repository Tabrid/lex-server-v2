import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
  }
});

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

export default Bookmark;
