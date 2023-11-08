import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  getUserByEmail,
} from "../controllers/UserControllers.js"; // Import your controller functions

const router = express.Router();

router.post("/create", createUser);
router.put("/update/:email", updateUser);
router.delete("/delete/:email", deleteUser);
router.get("/get/:email", getUserByEmail);

export default router;
