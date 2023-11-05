// testimonialRoutes.js
import { Router } from "express";
import { createTestimonial, getTestimonials } from "../controllers/TestimonialControllers.js";

const router = Router();

router.post("/testimonials", createTestimonial);
router.get("/testimonials", getTestimonials);

export default router;
