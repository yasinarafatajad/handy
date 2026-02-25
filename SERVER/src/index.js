import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import stats from "./routes/Stats.js";
import taskManagement from "./routes/Task.js";

const port = process.env.PORT || 7000;
const app = express();

// conneect to database
connectDB();

const corsPolicy = {origin: "http://localhost:8080", credentials:true}
// middleware
app.use(cors(corsPolicy));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// all end points
app.use("/api/v1", stats);
app.use("/api/v1", taskManagement);

// test route
app.get("/", (req, res) => {
  res.status(200).send("server working good.");
});

// listen to port
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
