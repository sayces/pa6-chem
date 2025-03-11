import express from "express";
import { getAllAppointments } from "../controllers/calendarController.js";
const router = express.Router();

router.get("/calendar", getAllAppointments);
