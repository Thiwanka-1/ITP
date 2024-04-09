import express from "express";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from "../models/user.model.js";

const route = express.Router();

route.route("/signup").post(async (req, res, next) => {
    const { username, email, password, address, phone, desc } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return next(errorHandle(400, 'all fields are required'));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
        address,
        phone,
        desc
    });

    try {
        await newUser.save();
        res.json('Signup success');
    } catch (error) {
        next(error);
    }
});

route.route("/signin").post(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password || email === '' || password === '') {
        return next(error(400, 'all fields are required'));
    }

    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return next(error(404, 'User not found'));
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(error(404, 'Invalid password'));
        }

        const token = jwt.sign({ id: validUser._id, isEmployeManger: validUser.isEmployeManger }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;
        res.status(200).cookie('access_token', token, {
            httponly: true
        }).json(rest);
    } catch (error) {
        next(error);
    }
});

export default route;
