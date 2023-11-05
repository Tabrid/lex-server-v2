// packageRoutes.js
import { Router } from "express";
import {
  createPackage,
  getPackages,
  getPackageById,
  updatePackage,
  deletePackage,
} from "../controllers/PackageControllers.js";


const router = Router();

router.post("/packages", createPackage);
router.get("/packages", getPackages);
router.get("/packages/:id", getPackageById);
router.patch("/packages/:id", updatePackage);
router.delete("/packages/:id", deletePackage);

export default router;
