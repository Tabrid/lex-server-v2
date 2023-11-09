// AppointmentController.js
import Appointment from "../models/Appointment/Appointment.js";

export const createAppointment = async (req, res) => {
  try {
    const { lawyerName, specialization, image, userEmail, userName,lawyerId } = req.body;
    const appointment = new Appointment({ lawyerName, specialization, image, userEmail , userName,lawyerId });
    await appointment.save();
    return res.status(201).json(appointment);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deleteAppointment = async (req, res) => {
  try {
    if (!(await Appointment.findById(req.params.id))) {
      return res.status(400).json({
        message: "Invalid Appointment ID",
      });
    }
    await Appointment.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Appointment deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

export const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    return res.status(200).json(appointment);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getAppointmentByMail = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const appointments = await Appointment.find({ userEmail: userEmail });
    
    return res.status(200).json(appointments);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getAppointmentByLawyerId = async (req, res) => {
  try {
    const lawyerId = req.params.id;
    const appointments = await Appointment.find({ _id: lawyerId });
    
    return res.status(200).json(appointments);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const getAllAppointments = async (req, res) => {
    try {
      const appointments = await Appointment.find();
      return res.status(200).json(appointments);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
