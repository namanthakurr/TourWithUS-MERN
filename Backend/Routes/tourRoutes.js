import express from "express";
import { getItinerary, bookTours } from "../controllers/tourController.js";

// ROUTES
const router = express.Router();

// API endpoint to fetch all tour data and book the tour

router.get("/itinerary/:state", getItinerary);
router.post("/book-tour", bookTours);

export default router;
