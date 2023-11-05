// blogRoutes.js
import { Router } from "express";
import {
    createBlog,
    getBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
  } from "../controllers/BlogControllers.js"; 
  
  

const router = Router();

router.post("/blogs", createBlog);
router.get("/blogs", getBlogs);
router.get("/blogs/:id", getBlogById);
router.patch("/blogs/:id", updateBlog);
router.delete("/blogs/:id", deleteBlog);

export default router;
