import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRouter from "./routes/auth.route.js"

dotenv.config()
mongoose.connect(process.env.MONGO).then(() =>{
    console.log("Conncted to Mongo")
}).catch((err) =>{
    console.log("MongoDB error is: ", err)
})

const app = express();
app.use(express.json())
app.listen(3000, ()=>{
    console.log("Server listening on port 3000");
})

app.use("/api/auth", authRouter)