// User Controller
import UserModel from "../models/User/UserModel.js";

// Create a new user
export const createUser = async (req, res) => {
  try {
    const user = new UserModel(req.body);
    const result = await user.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: "Failed to create a new user", message: error.message });
  }
};

// Get a user by email
export const getUserByEmail = async (req, res) => {
  const { email } = req.params; // You can pass the email as a route parameter or query parameter
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the user", message: error.message });
  }
};

// Get a user by ID
export const getUserById = async (req, res) => {
  const { userId } = req.params; // You can pass the user ID as a route parameter
  try {
    const user = await UserModel.findById(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the user", message: error.message });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users", message: error.message });
  }
};

export const isAdminByEmail = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const user = await UserModel.findOne({ email: userEmail });

    res.send({ isAdmin: user?.role === 'ADMIN' });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const isUserByEmail = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const user = await UserModel.findOne({ email: userEmail });

    res.send({ isUser: user?.role === 'USER' });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const isLawyerByEmail = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const user = await UserModel.findOne({ email: userEmail });

    res.send({ isLawyer: user?.role === 'LAWYER' });
  } catch (error) {
    return res.status(500).json(error);
  }
};