const express = require('express');
const router = express.Router();
const Note = require('../model/Note'); // Import the Note model



// Get a single note by ID
router.get('/', async (req, res) => {
    try {
      console.log(process.env);
      const notes = await Note.find();
      res.json(notes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.get('/:id', async (req, res) => {
    try {
      //console.log(process.env);
      const note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).json({ message: 'Note not found' });
      }
      res.json(note);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.post('/new', async (req, res) => {
    console.log(process.env);
    const { id, text, time, color } = req.body;
    const newNote = new Note({
        id,
      text,
      time,
      color,
    });
    try {
      const savedNote = await newNote.save();
      res.status(201).json(savedNote);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  router.patch('/update/:id', async (req, res) => {
    const { text } = req.body;
    try {
        const updatedNote = await Note.findOneAndUpdate(
            { id: req.params.id }, // Update based on your custom 'id' field
            { text: text }
            //{ new: true }
          );
  
      if (!updatedNote) {
        return res.status(404).json({ message: 'Note not found' });
      }
      
      // Successful update, send the updated note
      return res.json(updatedNote);
    } catch (error) {
      console.error('Error updating note:', error); // Log the error for debugging
      return res.status(500).json({ message: 'Failed to update note', error: error.message });
    }
  });
  
  
  router.delete('/remove/:id', async (req, res) => {
    try {
      const deletedNote = await Note.findOneAndDelete({ id: req.params.id });
      if (!deletedNote) {
        return res.status(404).json({ message: 'Note not found' });
      }
      res.json({ message: 'Note deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  module.exports = router;
