// reviewController.js
import Review from "../models/Review/Review.js";

export const createReview = async (req, res) => {
  try {
    const { userName, rating, comment,userEmail,LawyerId } = req.body;
    const review = new Review({ userName, rating, comment ,userEmail,LawyerId });
    await review.save();
    return res.status(201).json(review);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    return res.status(200).json(review);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getReviewByUserEmail = async (req, res) => {
  try {
    const userEmail = req.params.userEmail; // Assuming you pass userEmail as a URL parameter
    const reviews = await Review.find({ userEmail });
    
    if (reviews.length === 0) {
      return res.status(404).json({ message: "No reviews found for the given email" });
    }
    
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getReviewByLawyerId = async (req, res) => {
  try {
    const LawyerId = req.params.LawyerId; // Assuming you pass userEmail as a URL parameter
    const reviews = await Review.find({ LawyerId });
    
    if (reviews.length === 0) {
      return res.status(404).json({ message: "No reviews found for the given email" });
    }
    
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const updateReview = async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedReview) {
      return res.status(404).json({ error: "Review not found" });
    }
    return res.status(200).json(updatedReview);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deleteReview = async (req, res) => {
  try {
    if (!(await Review.findById(req.params.id))) {
      return res.status(400).json({
        message: "Invalid Review Id",
      });
    }
    await Review.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Review deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
