
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import path, { join } from "path";
import connectDB from "./src/configs/databaseConfigs.js";
import serviceRoutes from "./src/routes/serviceRoutes.js"
import blogRoutes from "./src/routes/blogRoutes.js"
import testimonialRoutes from "./src/routes/testimonialRoutes.js"
import reviewRoutes from "./src/routes/reviewRoutes.js"
import priceRoutes from "./src/routes/priceRoutes.js"
import  lawyerRoutes from "./src/routes/lawyerRoutes.js"
import  lawDataRoutes from "./src/routes/lawDataRoutes.js"
import bookmarkRoutes from "./src/routes/bookmarkRoutes.js"
import  userAccountRoutes from "./src/routes/userAccountRoutes.js"
import appointmentRoutes from "./src/routes/AppointmentRoutes.js"
// Application
const app = express();
dotenv.config();
const __dirname = path.dirname(new URL(import.meta.url).pathname);

connectDB();
// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  return res.send("Lex Official Server Running...!");
});

// users routes
app.use("/api/v1/services/", serviceRoutes);
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/testimonials", testimonialRoutes);
app.use("/api/v1/reviews", reviewRoutes);
app.use("/api/v1/lawyers", lawyerRoutes);
app.use("/api/v1/users", userAccountRoutes);
app.use("/api/v1/lawData", lawDataRoutes);
app.use("/api/v1/bookmarks", bookmarkRoutes);
app.use("/api/v1/packages", priceRoutes);
app.use("/api/v1/appointments", appointmentRoutes);


// Handle invalid routes
app.use("*", (req, res) => {
  return res.status(404).send("Invalid Route!!");
});

// listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
