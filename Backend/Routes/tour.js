// Import necessary modules
import express from 'express';
import TourData from '../models/TourModel.js'; // Adjust the path based on your file structure
import bookTour from '../models/userModel.js'

const router = express.Router();

// API endpoint to fetch all tour data
router.get('/api/tours', async (req, res) => {
  try {
    const allTourData = await TourData.aggregate([
      { $project: { data: { $objectToArray: "$$ROOT" } } },
      { $unwind: "$data" },
      { $replaceRoot: { newRoot: "$data.v" } },
    ]);
    res.json(allTourData);
    console.log(allTourData);
  } catch (error) {
    console.error('Error fetching all tour data:', error);
    res.status(500).json({ message: 'Error fetching tour data.' });
  }
});

router.post('/bookTour', bookTour);

export default router;
