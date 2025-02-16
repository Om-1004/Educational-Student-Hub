import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import todoRouter from "./routes/todo.route.js"
import cookieParser from "cookie-parser"

dotenv.config()
mongoose.connect(process.env.MONGO).then(() =>{
    console.log("Conncted to Mongo")
}).catch((err) =>{
    console.log("MongoDB error is: ", err)
})

const app = express();
app.use(express.json())
app.use(cookieParser());
app.listen(3000, ()=>{
    console.log("Server listening on port 3000");
})

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/todo", todoRouter)

app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});