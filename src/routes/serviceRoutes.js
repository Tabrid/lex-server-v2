import { Router } from "express";
import { createService, deleteService, getAllService, getServiceById, updateService, searchServices } from "../controllers/ServiceControllers.js";

const router = Router();

// Create a new service
router.post("/service", createService);

// Delete a service by ID
router.delete("/service/:id", deleteService);

// Get all services
router.get("/services", getAllService);

// Get a service by ID
router.get("/service/:id", getServiceById);

// Update a service by ID
router.patch("/service/:id", updateService);
//search
router.get("/services/search", searchServices);
export default router;
