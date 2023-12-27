
const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "NOTESAPI";


const signup = async (req, res) => {

    // existing user check
    // hashed password
    // user creation
    // token generate

    const { username, email, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "User Already exist" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await userModel.create({
            email: email,
            password: hashedPassword,
            username: username
        });

        const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
        res.status(201).json({ user: result, token: token })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}


const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if the user exists
        const existingUser = await userModel.findOne({ email: email });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }
    

        // Compare the entered password with the hashed password in the database
        const matchPassword = await bcrypt.compare(password, existingUser.password);

        // Check if the passwords match
        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate a JWT token for the authenticated user
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY);

        // Respond with the user details and the token
        res.status(201).json({ user: existingUser, token: token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};


module.exports = { signup, signin };