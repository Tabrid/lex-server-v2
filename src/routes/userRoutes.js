import { Router } from 'express';
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/UserControllers.js';

const router = Router();

// Create a new user
router.post('/users', createUser);

// Get all users
router.get('/users', getAllUsers);

// Get a user by ID
router.get('/users/:id', getUserById);

// Update a user by ID
router.patch('/users/:id', updateUser);

// Delete a user by ID
router.delete('/users/:id', deleteUser);

export default router;
