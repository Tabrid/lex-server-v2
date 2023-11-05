
import LawDataModel from "../models/LawData/LawData.js";

export const createLawData = async (req, res) => {
  try {
    const result = new LawDataModel({
      Problem: req.body.Problem,
      Victims: req.body.Victims,
      Query: req.body.Query,
      Suggestions: req.body.Suggestions,
      Law: req.body.Law,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const deleteLawData = async (req, res) => {
  try {
    if (!(await LawDataModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await LawDataModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
// Get all services
export const getAllLawData = async (req, res) => {
  try {
    const LawData = await LawDataModel.find();
    return res.status(200).send(LawData);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// Get a service by ID
export const getLawDataById = async (req, res) => {
  try {
    const LawData = await LawDataModel.findById(req.params.id);
    if (!LawData) {
      return res.status(404).send({ error: "LawData not found" });
    }
    return res.status(200).send(LawData);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// Update a service by ID
export const updateLawData = async (req, res) => {
  try {
    const updatedLawData = await LawDataModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedLawData) {
      return res.status(404).send({ error: "LawData not found" });
    }
    return res.status(200).send(updatedLawData);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const getLawDataByProblem = async (req, res) => {
  try {
    const problem = req.params.problem; // Assuming you want to pass the problem as a parameter in the URL
    const lawData = await LawDataModel.find({ Problem: problem });

    if (!lawData || lawData.length === 0) {
      return res.status(404).send({ error: "LawData with the specified problem not found" });
    }

    return res.status(200).send(lawData);
  } catch (error) {
    return res.status(500).send(error);
  }
};



