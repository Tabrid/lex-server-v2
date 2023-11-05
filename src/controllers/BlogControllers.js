// blogController.js
import Blog from "../models/Blog/Blog.js";

export const createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const blog = new Blog({ title, content, author });
    await blog.save();
    return res.status(201).json(blog);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    return res.status(200).json(blog);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    return res.status(200).json(updatedBlog);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deleteBlog = async (req, res) => {
  try {
    if (!(await Blog.findById(req.params.id))) {
      return res.status(400).json({
        message: "Invalid Blog Id",
      });
    }
    await Blog.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
