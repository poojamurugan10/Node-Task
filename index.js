import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbConfig.js";
import authRoute from "./Routers/authRoute.js";
import serviceRoute from "./Routers/serviceRoute.js";
import bookRoute from "./Routers/bookingRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Backend");
});

app.use("/api/auth",authRoute);
app.use("/api/service",serviceRoute);
app.use("/api/booking",bookRoute)

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Server Started and running");
});