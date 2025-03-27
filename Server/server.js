require("dotenv").config(); // Load .env file


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB!"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB!"));

// Import authentication routes
const authRoutes = require("./Components/routes/auth");
app.use("/api/auth", authRoutes);

const exportRoutes = require("./Components/routes/export");
app.use("/api", exportRoutes);

// Import inventory routes
const inventoryRoutes = require('./Components/routes/inventory');
app.use('/api/inventory', inventoryRoutes);

const itemRoutes = require("./Components/routes/itemoperations");
app.use("/api/items", itemRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

