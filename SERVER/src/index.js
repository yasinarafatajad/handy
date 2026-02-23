import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import taskManagement from "./routes/Task.js";

const port = process.env.PORT || 7000;
const app = express();

// conneect to database
connectDB();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// all end points
app.use("/api/v1", taskManagement);

// test route
app.get("/", (req, res) => {
  res.status(200).send("server working good.");
});

// listen to port
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
