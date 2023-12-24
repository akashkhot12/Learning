
const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');
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
        const hashedPassword = await bcrypt.hash(password,10);

        const result  = await userModel.create({
            email:email,
            password:password,
            username:username
        });

        const token = jwt.sign({email:result.email,id:result._id},SECRET_KEY)

    } catch (error) {

    }


}

const signin = (req, res) => {

}

module.exports = { signup, signin };