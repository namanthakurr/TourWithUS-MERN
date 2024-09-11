import TourData from "../models/TourModel.js";
import User from "../models/userModel.js";

// Backend endpoint to get itinerary data by state

export async function getItinerary(req, res) {
  try {
    const { state } = req.params;
    const data = await TourData.find({ [state]: { $exists: true } });

    if (data.length > 0) {
      const stateData = data[0][state];
      res.status(200).json(stateData);
    } else {
      res
        .status(404)
        .json({ message: `No data found for the specified state: ${state}` });
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Error fetching data" });
  }
}

export async function bookTours(req, res) {
  const { userId, tourId, state } = req.body;
  // console.log("Received request for /api/book-tour", req.body);

  try {
    if (!userId || !tourId || !state) {
      console.log("Missing userId, tourId, or state");
      return res
        .status(400)
        .json({ status: "error", error: "Missing userId, tourId, or state" });
    }

    // Find the user by ID
    // console.log("Finding user by ID:", userId);
    const user = await User.findById(userId);
    if (!user) {
      console.log("User not found:", userId);
      return res.status(404).json({ status: "error", error: "User not found" });
    }

    // Find the tour data for the specified state
    // console.log("Finding tour data for state:", state);
    const tourData = await TourData.findOne();
    if (!tourData) {
      console.log("Tour data not found");
      return res
        .status(404)
        .json({ status: "error", error: "Tour data not found" });
    }

    // Find the tour in the tour data for the specified state
    // console.log("Finding tour in tour data for state:", state);
    const tour = tourData[state].find((tour) => tour._id.toString() === tourId);
    if (!tour) {
      console.log("Tour not found:", tourId);
      return res.status(404).json({ status: "error", error: "Tour not found" });
    }

    // Add the tour to the user's booked tours if not already booked
    if (!user.bookedTours.includes(tourId)) {
      // console.log("Adding tour to user's booked tours:", tourId);
      await User.updateOne({ _id: userId }, { $push: { bookedTours: tourId } });
      console.log("Tour added successfully:", tourId);
    }

    res
      .status(200)
      .json({ status: "success", message: "Tour booked successfully" });
  } catch (err) {
    console.error("Error booking tour:", err); // Log the error details
    res.status(500).json({ status: "error", error: "Error booking tour" });
  }
}

// -----------------extra endpoint for Reference

// app.get("/api/tours", async (req, res) => {
//   try {
//     const allTourData = await TourData.find().lean();
//     res.json(allTourData);
//   } catch (error) {
//     console.error("Error fetching all tour data:", error);
//     res.status(500).json({ message: "Error fetching tour data." });
//   }
// });
