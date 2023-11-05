// testimonialController.js
import Testimonial from "../models/Testimonial/Testimonial.js";

export const createTestimonial = async (req, res) => {
  try {
    const { name, content } = req.body;
    const testimonial = new Testimonial({ name, content });
    await testimonial.save();
    return res.status(201).json(testimonial);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    return res.status(200).json(testimonials);
  } catch (error) {
    return res.status(500).json(error);
  }
};
