// lawyerRoutes.js
import { Router } from "express";
import {
  createLawyer,
  getLawyers,
  getLawyerById,
  updateLawyer,
  deleteLawyer,
} from "../controllers/LawyerControllers.js";

const router = Router();

router.post("/lawyers", createLawyer);
router.get("/lawyers", getLawyers);
router.get("/lawyers/:id", getLawyerById);
router.patch("/lawyers/:id", updateLawyer);
router.delete("/lawyers/:id", deleteLawyer);

export default router;
