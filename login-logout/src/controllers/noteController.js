const noteModel = require('../models/notes');

const createNote = async (req, res) => {
    const { title, description } = req.body;
    const newNote = new noteModel({
        title: title,
        decription: description,
        userId: req.userId
    });
    try {
        await newNote.save();
        res.status(201).json(newNote)
    } catch (error) {
        console.log(error);
        res.status(500).json({ messege: "something went wrong" });
    }
}

const updateNote = (req, res) => {

}

const deleteNote = (req, res) => {

}


const getNote = async (req, res) => {
    try {
        const notes = await noteModel.find({ userId: req.userId });
        res.status(200).json(notes)
    } catch (error) {
        console.log(error);
        res.status(500).json({ messege: "something went wrong" });
    }
}

module.exports = {
    createNote,
    updateNote,
    getNote,
    deleteNote
}