// AppointmentRoutes.js
import { Router } from "express";
import {
  createAppointment,
  deleteAppointment,
  getAppointmentById,
  getAppointmentByMail,
  getAppointmentByLawyerId,
  getAllAppointments,
} from "../controllers/AppointmentController.js";

const router = Router();

router.post("/appointments", createAppointment);
router.get("/appointments", getAllAppointments);
router.delete("/appointments/:id", deleteAppointment);
router.get("/appointments/:id", getAppointmentById);
router.get("/appointments/user/:email", getAppointmentByMail);
router.get("/appointments/lawyer/:id", getAppointmentByLawyerId);

export default router;
