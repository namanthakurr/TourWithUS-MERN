import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/userModel.js";
import TourData from "./models/TourModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import  tourRoutes from './Routes/tour.js'
// import bodyParser from "body-parser"

const app = express();

app.use('/api', tourRoutes);
app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());
dotenv.config();
// app.use("/api/TourData", tourRoutes);

const DB = process.env.DATABASE;

mongoose
  .connect(DB
    , { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => console.error("DB Connection Error:", err));

// ------------------------------- Authentication

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  // Remove the password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    userId: user._id, // Include userId in the response
    data: {
      user,
    },
  });
};

app.post("/api/signUp", async (req, res) => {
  try {
    const { name, email, password, passwordConfirm } = req.body;

    if (password !== passwordConfirm) {
      return res
        .status(400)
        .json({ status: "error", error: "Passwords do not match" });
    }

    const newUser = await User.create({
      name,
      email,
      password,
      passwordConfirm,
    });

    console.log("New User:", newUser); // Debugging line

    createSendToken(newUser, 201, res); // Send token and user data including userId
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "error", error: "Error during signup" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ status: "error", error: "Please provide email and password!" });
    }

    const user = await User.findOne({ email }).select("+password");

    console.log("User:", user); // Debugging line

    if (!user) {
      return res
        .status(401)
        .json({ status: "error", error: "Incorrect email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ status: "error", error: "Incorrect email or password" });
    }

    createSendToken(user, 200, res); // Send token and user data including userId
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ status: "error", error: "Error during login" });
  }
});

app.get("/api/logout", (req, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({
    status: "success",
  });
});

// Backend endpoint to get itinerary data by state

// app.get("/api/tours", async (req, res) => {
//   try {
//     const allTourData = await TourData.find().lean();
//     res.json(allTourData);
//   } catch (error) {
//     console.error("Error fetching all tour data:", error);
//     res.status(500).json({ message: "Error fetching tour data." });
//   }
// });

app.get("/api/itinerary/:state", async (req, res) => {
  try {
    const { state } = req.params; 
    const data = await TourData.find({ [state]: { $exists: true } });

    if (data.length > 0) {
      const stateData = data[0][state]; 
      res.status(200).json(stateData); 
    } else {
      res.status(404).json({ message: `No data found for the specified state: ${state}` });
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Error fetching data" });
  }
});
 
app.post('/api/book-tour', async (req, res) => {
  const { userId, tourId } = req.body;
  console.log('Received request for /api/book-tour', req.body);
  
  try {    
        if (!userId || !tourId) {
          console.log("Missing userId or tourId");
          return res.status(400).json({ status: "error", error: "Missing userId or tourId" });
        }
    
        // Find the user by ID
        console.log("Finding user by ID:", userId);
        const user = await User.findById(userId);
        if (!user) {
          console.log("User not found:", userId);
          return res.status(404).json({ status: "error", error: "User not found" });
        }
    
        // Ensure the tour exists
        console.log("Checking if tour exists:", tourId);
        const tourExists = await TourData.exists({ _id: tourId });
        if (!tourExists) {
          console.log("Tour not found:", tourId);
          return res.status(404).json({ status: "error", error: "Tour not found" });
        }
    
        // Add the tour to the user's booked tours if not already booked
        if (!user.bookedTours.includes(tourId)) {
          console.log("Adding tour to user's booked tours:", tourId);
          user.bookedTours.push(tourId);
          await user.save();
          console.log("Tour added successfully:", tourId);
        }
    
        res.status(200).json({ status: "success", message: "Tour booked successfully" });
      } catch (err) {
        console.error("Error booking tour:", err); // Log the error details
        res.status(500).json({ status: "error", error: "Error booking tour" });
      }
     });







const port = process.env.PORT || 8000;
console.log(port)

app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}...`);
});
