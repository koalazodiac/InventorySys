const express = require("express");
const fs = require("fs");
const { Parser } = require("json2csv");
const User = require("../models/User");

const router = express.Router();

// Export users to CSV
router.get("/export", async (req, res) => {
  try {
    const users = await User.find({}, "username email password");

    if (!users.length) {
      return res.status(404).json({ message: "No data found" });
    }

    // Convert JSON to CSV
    const fields = ["username", "email", "password"];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(users);

    // Save CSV to file
    fs.writeFileSync("users.csv", csv);

    // Send CSV as response
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=users.csv");
    res.status(200).send(csv);
  } catch (error) {
    res.status(500).json({ message: "Error exporting data" });
  }
});

module.exports = router;
