// bookmarkRoutes.js
import { Router } from "express";
import {
  createBookmark,
  getBookmarkById,
  deleteBookmark,
  getAllBookmarks,
  getBookmarksByEmail,
} from "../controllers/BookmarkControllers.js";

const router = Router();

router.post("/bookmarks", createBookmark);
router.delete("/bookmarks/:id", deleteBookmark);
router.get("/bookmarks", getAllBookmarks);
router.get("/bookmarks/:id", getBookmarkById);
router.get("/bookmarks/user/:email", getBookmarksByEmail);

export default router;
