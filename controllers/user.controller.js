const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

// Controller for user signup
const signup = async (req, res) => {
    const { email, name, password } = req.body;

    try {
        // Check if user with the provided email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user
        const newUser = new User({ email, name, password });
        await newUser.save();
        
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user' });
    }
};

// Controller for user login
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user with the provided email exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Check if the password matches
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate and send JWT token
        const token = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN_SECRET);
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in' });
    }
};

module.exports = { signup, login };
