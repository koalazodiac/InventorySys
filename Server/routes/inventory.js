const express = require("express");
const router = express.Router();

// Example inventory route
router.get("/", (req, res) => {
    res.json({ message: "Inventory route is working" });
});

module.exports = router;