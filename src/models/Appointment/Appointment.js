// lawyerModel.js
import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  lawyerName: {
    type: String,
    required: true,
  },
  lawyerId: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  }	,
  userName: {
    type: String,
    required: true,
  }	
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

export default Appointment;
