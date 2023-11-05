import { Router } from "express";
import { createLawData, deleteLawData, getAllLawData, getLawDataById, updateLawData, getLawDataByProblem } from "../controllers/LawDataControllers.js";

const router = Router();

// Create a new lawData
router.post("/lawData", createLawData);

// Delete a lawData by ID
router.delete("/lawData/:id", deleteLawData);

// Get all lawData
router.get("/lawData", getAllLawData);

// Get a lawData by ID
router.get("/lawData/:id", getLawDataById);

// Update a lawData by ID
router.patch("/lawData/:id", updateLawData);

// Get lawData by Problem
router.get("/lawDataByProblem/:problem", getLawDataByProblem);

export default router;
