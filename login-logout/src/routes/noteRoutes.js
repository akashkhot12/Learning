const express = require('express');
const { getNote, createNote, deleteNote, updateNote } = require('../controllers/noteController');
const noteRouter = express.Router();

noteRouter.get('/',getNote);

noteRouter.post('/',createNote);

noteRouter.delete('/:id',deleteNote);

noteRouter.put('/:id',updateNote);

module.exports = noteRouter;