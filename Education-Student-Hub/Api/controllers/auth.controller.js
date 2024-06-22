import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"

export const signup = async(req, res) =>{
    const { firstName, lastName, username, email, password } = req.body
    const hashedPassword = bcryptjs.hashSync(password, 12)
    const newUser = new User({ firstName, lastName, username, email, password: hashedPassword})
    await newUser.save()
    res.status(201).json("User created successfully")
}