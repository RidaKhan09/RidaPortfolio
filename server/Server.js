import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import cors from "cors";
import nodemailer from "nodemailer"; // 👈 add this
import adminRoutes from "./routes/adminRoutes.js";
import Admin from "./models/Admin.js";
import projectRoutes from "./routes/projectRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/projects", projectRoutes);

// 📩 Contact Route
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Gmail from .env
        pass: process.env.EMAIL_PASS, // App Password from .env
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // tumhara email jahan msg aana hai
      subject: `New message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    res.json({ success: true, message: "Message sent 🚀" });
  } catch (err) {
    console.error("❌ Email error:", err);
    res.status(500).json({ success: false, message: "Failed to send" });
  }
});

// MongoDB connect
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

// Seed admin
const seedAdmin = async () => {
  const existingAdmin = await Admin.findOne({ email: "krida2686@gmail.com" });
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash("Rida123", 10);
    await Admin.create({
      email: "krida2686@gmail.com",
      password: hashedPassword,
    });
    console.log("✅ Admin created!");
  } else {
    console.log("✅ Admin already exists!");
  }
};

// Start server after DB connection
const startServer = async () => {
  await connectDB();
  await seedAdmin();

  app.listen(process.env.PORT || 5000, () => {
    console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
  });
};

startServer();
