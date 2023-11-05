// reviewRoutes.js
import { Router } from "express";
import {
  createReview,
  getReviews,
  getReviewById,
  updateReview,
  deleteReview,
  getReviewByLawyerId,
  getReviewByUserEmail // Import the new function
} from "../controllers/ReviewControllers.js";

const router = Router();

router.post("/reviews", createReview);
router.get("/reviews", getReviews);
router.get("/reviews/userEmail/:userEmail", getReviewByUserEmail); // New route for getting reviews by user email
router.get("/reviews/LawyerId/:LawyerId", getReviewByLawyerId); // New route for getting reviews by user email
router.get("/reviews/:id", getReviewById); // Get a review by ID
router.patch("/reviews/:id", updateReview); // Update a review by ID
router.delete("/reviews/:id", deleteReview); // Delete a review by ID

export default router;
