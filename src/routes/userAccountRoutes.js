import express from "express";
import {
  createUser,
  getUserByEmail,
  getUserById,
  getAllUsers,
  isAdminByEmail,
  isUserByEmail,
  isLawyerByEmail
} from "../controllers/UserControllers.js";

const router = express.Router();

// Create a new user
router.post("/users", createUser);

// Get a user by email
router.get("/users/email/:email", getUserByEmail);

// Get a user by ID
router.get("/users/:userId", getUserById);
// Get all users
router.get("/users", getAllUsers);
router.get("/users/admin/:email", isAdminByEmail);
router.get("/users/user/:email", isUserByEmail); 
router.get("/users/lawyer/:email", isLawyerByEmail);

export default router;
