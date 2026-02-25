import express from "express";
import { getStats } from "../controllers/Stats.js";

const router = express.Router();

// get stats
router.get("/getStats", getStats);

export default router;
