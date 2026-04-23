const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

// GET notes for a specific user
router.get("/", async (req, res) => {
  const { userId, archived } = req.query;

  try {
    const filter = { userId };

    if (archived === "true") {
      filter.isArchived = true;
    } else {
      filter.isArchived = false;
    }

    const notes = await Note.find(filter).sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE note for a user
router.post("/", async (req, res) => {
  const { title, content, userId, category } = req.body;

  if (!title?.trim() || !content?.trim()) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  try {
    const newNote = new Note({
      title,
      content,
      userId,
      category,
    });

    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE note
router.put("/:id", async (req, res) => {
  const { title, content, category } = req.body;

  if (!title?.trim() || !content?.trim()) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content, category },
      { new: true },
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json(updatedNote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  router.put("/:id/archive", async (req, res) => {
    try {
      const updatedNote = await Note.findByIdAndUpdate(
        req.params.id,
        { isArchived: true },
        { new: true },
      );

      if (!updatedNote) {
        return res.status(404).json({ message: "Note not found" });
      }

      res.json(updatedNote);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  router.put("/:id/unarchive", async (req, res) => {
    try {
      const updatedNote = await Note.findByIdAndUpdate(
        req.params.id,
        { isArchived: false },
        { new: true },
      );

      if (!updatedNote) {
        return res.status(404).json({ message: "Note not found" });
      }

      res.json(updatedNote);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
});

// DELETE note
router.delete("/:id", async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json({ message: "Note deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
