import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// ✅ Import Routes
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import adminRoute from "./route/admin.route.js";

dotenv.config();
const app = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ ES Modules ke liye __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ PORT & Mongo URI
const port = process.env.PORT || 5050;
const mongo_uri = process.env.MONGO_URI;

// ✅ MongoDB Connection
mongoose
  .connect(mongo_uri, { serverSelectionTimeoutMS: 5000 })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((error) => console.log("❌ MongoDB Error:", error.message));

// ✅ API Routes
app.use("/api/books", bookRoute);
app.use("/api/users", userRoute);
app.use("/api/admin", adminRoute);

// ✅ Serve React Build (Production Mode on Render)
const clientBuildPath = path.join(__dirname, "../client/dist");
app.use(express.static(clientBuildPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

// ✅ Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
