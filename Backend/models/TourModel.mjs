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
});

// Define the schema for the slide data, mapping locations to arrays of tours
const slideDataSchema = new Schema({
  Rajasthan: [tourSchema],
  Gujrat: [tourSchema],
  MadhyaPradesh: [tourSchema],
  Maharashtra: [tourSchema],
  Daman: [tourSchema],
  Goa: [tourSchema],
  Kerala: [tourSchema],
});

// Create the model from the schema
const TourData = mongoose.model("SlideData", slideDataSchema);

export default TourData;
