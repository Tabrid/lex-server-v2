// packageController.js
import Package from "../models/Package/Package.js";

export const createPackage = async (req, res) => {
  try {
    const { name, description, price, features } = req.body;
    const packaged = new Package({ name, description, price, features });
    await packaged.save();
    return res.status(201).json(packaged);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    return res.status(200).json(packages);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getPackageById = async (req, res) => {
  try {
    const packaged = await Package.findById(req.params.id);
    if (!packaged) {
      return res.status(404).json({ error: "Package not found" });
    }
    return res.status(200).json(packaged);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const updatePackage = async (req, res) => {
  try {
    const updatedPackage = await Package.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedPackage) {
      return res.status(404).json({ error: "Package not found" });
    }
    return res.status(200).json(updatedPackage);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deletePackage = async (req, res) => {
  try {
    if (!(await Package.findById(req.params.id))) {
      return res.status(400).json({
        message: "Invalid Package Id",
      });
    }
    await Package.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Package deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
