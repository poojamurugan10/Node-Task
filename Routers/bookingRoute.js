import express from "express";
import { authMiddleware } from "../Middleware/authMiddleware.js";
import { bookservice } from "../Controllers/bookingController.js";


const router = express.Router();

router.post("/book",authMiddleware,bookservice)




export default router;