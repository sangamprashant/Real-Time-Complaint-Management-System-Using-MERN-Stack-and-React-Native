const express = require("express");
const Complaint = require("../models/Complaint");
const upload = require("../middleware/upload");

const router = express.Router();

router.post("/", upload.single("image"), async (req, res) => {
  const complaint = await Complaint.create({
    title: req.body.title,
    description: req.body.description,
    image: req.file?.filename,
    user: req.body.userId,
  });

  res.json({ complaint });
});

router.get("/", async (req, res) => {
  const complaints = await Complaint.find().sort({ createdAt: -1 });
  res.json({ complaints });
});

module.exports = router;
