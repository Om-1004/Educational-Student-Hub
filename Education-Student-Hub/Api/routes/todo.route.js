import express from "express";
import createTodo from "../controllers/todo.controller.js"
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();


router.post("/createTodo",  createTodo)

export default router;