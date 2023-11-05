import UserModel from "../models/User/User.js"; 

// Create a new user
export const createUser = async (req, res) => {
  try {
    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      // Add other user properties as needed
    });
    await newUser.save();
    return res.status(201).send(newUser);
  } catch (error) {
    return res.status(400).send(error);
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// Get a user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// Update a user by ID
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).send({ error: "User not found" });
    }
    return res.status(200).send(updatedUser);
  } catch (error) {
    return res.status(400).send(error);
  }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  try {
    if (!(await UserModel.findById(req.params.id))) {
      return res.status(404).send({ message: "User not found" });
    }
    await UserModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({ message: "User deleted" });
  } catch (error) {
    return res.status(400).send(error);
  }
};
