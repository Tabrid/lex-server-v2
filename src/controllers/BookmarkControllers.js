
import Bookmark from "../models/Bookmark/Bookmark.js";

export const createBookmark = async (req, res) => {
  try {
    const { title, url, description, image, userEmail } = req.body;
    const bookmark = new Bookmark({ title, url, description, image, userEmail });
    await bookmark.save();
    return res.status(201).json(bookmark);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getBookmarks = async (req, res) => {
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
      return res.status(404).json({ error: "Bookmark not found" });
    }
    return res.status(200).json(bookmark);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const updateBookmark = async (req, res) => {
  try {
    const updatedBookmark = await Bookmark.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBookmark) {
      return res.status(404).json({ error: "Bookmark not found" });
    }
    return res.status(200).json(updatedBookmark);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deleteBookmark = async (req, res) => {
  try {
    if (!(await Bookmark.findById(req.params.id))) {
      return res.status(400).json({
        message: "Invalid Bookmark Id",
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

export const searchBookmarksByEmail = async (req, res) => {
  try {
    const { userEmail } = req.query;
    const bookmarks = await Bookmark.find({ userEmail });
    return res.status(200).json(bookmarks);
  } catch (error) {
    return res.status(500).json(error);
  }
};
