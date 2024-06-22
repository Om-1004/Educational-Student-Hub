import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
mongoose.connect(process.env.MONGO).then(() =>{
    console.log("Conncted to Mongo")
}).catch((err) =>{
    console.log("MongoDB error is: ", err)
})

const app = express();

app.listen(3000, ()=>{
    console.log("Server listening on port 3000");
})