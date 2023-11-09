
import Bookmark from "../models/Bookmark/Bookmark.js";


export const createBookmark = async (req, res) => {
  try {
    const { name, specialization,  image, userEmail,LawyerId } = req.body;
    const bookmark = new Bookmark({ name, specialization, image, userEmail,LawyerId });
    await bookmark.save();
    return res.status(201).json(bookmark);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deleteBookmark = async (req, res) => {
  try {
    if (!(await Bookmark.findById(req.params.id))) {
      return res.status(400).json({
        message: "Invalid Bookmark ID",
      });
    }
    await Bookmark.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Bookmark deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

export const getAllBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find();
    return res.status(200).json(bookmarks);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getBookmarkById = async (req, res) => {
  try {
    const bookmark = await Bookmark.findById(req.params.id);
    if (!bookmark) {
      return res.status(404).json({ message: "Bookmark not found" });
    }
    return res.status(200).json(bookmark);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getBookmarksByEmail = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const bookmarks = await Bookmark.find({ userEmail: userEmail });
    
    return res.status(200).json(bookmarks);
  } catch (error) {
    return res.status(500).json(error);
  }
};
