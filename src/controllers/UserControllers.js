import UserModel from "../models/User/UserModel.js"; // Import your UserModel

// Create a new user
export const createUser = async (req, res) => {
  try {
    const user = new UserModel(req.body);
    const result = await user.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: "Failed to create a new user." });
  }
};

// Update a user by their email
export const updateUser = async (req, res) => {
  try {
    const email = req.params.email;
    const updatedData = req.body;
    const result = await UserModel.findOneAndUpdate({ email }, updatedData, { new: true });
    if (!result) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: "Failed to update the user." });
  }
};

// Delete a user by their email
export const deleteUser = async (req, res) => {
  try {
    const email = req.params.email;
    const result = await UserModel.findOneAndDelete({ email });
    if (!result) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete the user." });
  }
};

// Get a user by their email
export const getUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "Failed to retrieve the user." });
  }
};
