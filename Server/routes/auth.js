const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// Register User
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Check if user already exists
    let userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "Email already registered" });

    const userRole = role && role === "admin" ? "admin" : "user";

    // ✅ Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("❌ Register error:", error); // <--- this is key
    res.status(500).json({ message: "Server Error" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "Invalid credentials" });
  
      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
  
      res.json({ message: "Login successful!" });
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  });


module.exports = router;