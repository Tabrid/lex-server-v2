// lawyerController.js
import Lawyer from "../models/Lawyer/Lawyer.js";

export const createLawyer = async (req, res) => {
  try {
    const { name, specialization, description, contact } = req.body;
    const lawyer = new Lawyer({ name, specialization, description, contact });
    await lawyer.save();
    return res.status(201).json(lawyer);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getLawyers = async (req, res) => {
  try {
    const lawyers = await Lawyer.find();
    return res.status(200).json(lawyers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getLawyerById = async (req, res) => {
  try {
    const lawyer = await Lawyer.findById(req.params.id);
    if (!lawyer) {
      return res.status(404).json({ error: "Lawyer not found" });
    }
    return res.status(200).json(lawyer);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const updateLawyer = async (req, res) => {
  try {
    const updatedLawyer = await Lawyer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedLawyer) {
      return res.status(404).json({ error: "Lawyer not found" });
    }
    return res.status(200).json(updatedLawyer);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deleteLawyer = async (req, res) => {
  try {
    if (!(await Lawyer.findById(req.params.id))) {
      return res.status(400).json({
        message: "Invalid Lawyer Id",
      });
    }
    await Lawyer.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Lawyer deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
