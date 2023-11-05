
import ServiceModel from "../models/Service/Service.js";

export const createService = async (req, res) => {
  try {
    const result = new ServiceModel({
      serviceName: req.body.serviceName,
      type: req.body.type,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const deleteService = async (req, res) => {
  try {
    if (!(await ServiceModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await ServiceModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
// Get all services
export const getAllService = async (req, res) => {
  try {
    const services = await ServiceModel.find();
    return res.status(200).send(services);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// Get a service by ID
export const getServiceById = async (req, res) => {
  try {
    const service = await ServiceModel.findById(req.params.id);
    if (!service) {
      return res.status(404).send({ error: "Service not found" });
    }
    return res.status(200).send(service);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// Update a service by ID
export const updateService = async (req, res) => {
  try {
    const updatedService = await ServiceModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedService) {
      return res.status(404).send({ error: "Service not found" });
    }
    return res.status(200).send(updatedService);
  } catch (error) {
    return res.status(400).send(error);
  }
};


export const searchServices = async (req, res) => {
  try {
    const { q } = req.query;

    // Define a query object to filter services based on parameters
    const query = {};

    if (q) {
      query.$or = [
        { serviceName: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
      ];
    }

    const services = await ServiceModel.find(query);

    return res.status(200).send(services.slice(0, 10));
  } catch (error) {
    return res.status(500).send(error);
  }
};



