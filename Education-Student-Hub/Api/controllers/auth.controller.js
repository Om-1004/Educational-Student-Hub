import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

export const signup = async(req, res, next) =>{
    const { firstName, lastName, username, email, password } = req.body
    const hashedPassword = bcryptjs.hashSync(password, 12)
    const newUser = new User({ firstName, lastName, username, email, password: hashedPassword})
    try {
        await newUser.save();
        res.status(201).json("User created successfully")
        
    } catch (error) {
        next(error);
    }
}

export const signin = async (req, res, next) =>{
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({email})
        if (!validUser) return next(errorHandler(404, "User not found!"))
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) return next(errorHandler(404, "Wrong password!"))
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
        const { password: pass, ...rest } = validUser._doc;
        res.cookie("access_token", token, {httpOnly: true}).status(200).json(rest)

    } catch (error) {
        next(error);
    }
}