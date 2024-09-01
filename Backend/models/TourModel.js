import mongoose from "mongoose";
const { Schema } = mongoose;

// Define the schema for individual tour items
const tourSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  itinerary: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
});

// Define the schema for the slide data, mapping locations to arrays of tours
const slideDataSchema = new Schema({
  Rajasthan: [tourSchema],
  Gujarat: [tourSchema],
  MadhyaPradesh: [tourSchema],
  Maharashtra: [tourSchema],
  Daman: [tourSchema],
  Goa: [tourSchema],
  Kerala: [tourSchema],
  Karnataka: [tourSchema],
  AndhraPradesh: [tourSchema],
  Meghalaya: [tourSchema],
  UttarPradesh: [tourSchema],
  Ladakh: [tourSchema],
  JammuAndKashmir: [tourSchema],
  HimachalPradesh: [tourSchema],
  Uttarakhand: [tourSchema],
  Sikkim: [tourSchema],
  WestBengal: [tourSchema],
  Assam: [tourSchema],
  Odisha: [tourSchema],
  TamilNadu: [tourSchema],
});

// Create the model from the schema
const TourData = mongoose.model("TourData", slideDataSchema);

export default TourData;
