// bookmarkRoutes.js
import { Router } from "express";
import {
  createBookmark,
  getBookmarks,
  getBookmarkById,
  updateBookmark,
  deleteBookmark,
} from "../controllers/BookmarkControllers.js";

const router = Router();

router.post("/bookmarks", createBookmark);
router.get("/bookmarks", getBookmarks);
router.get("/bookmarks/:id", getBookmarkById);
router.patch("/bookmarks/:id", updateBookmark);
router.delete("/bookmarks/:id", deleteBookmark);

// Add a new route for saving a bookmark with email
router.post("/bookmarks/save", createBookmark);
router.get("/bookmarks/search", async (req, res) => {
    try {
      const { userEmail } = req.query;
      const bookmarks = await Bookmark.find({ userEmail });
      return res.status(200).json(bookmarks);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
export default router;
