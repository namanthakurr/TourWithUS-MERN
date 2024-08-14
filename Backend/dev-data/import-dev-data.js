import fs from 'fs';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import TourData from '../models/TourModel.mjs'; // Ensure correct path and extension

dotenv.config();

const DB = process.env.DATABASE;

// Connect to MongoDB
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connection Successful!'))
  .catch(err => console.error('DB Connection Error:', err));

// Resolve __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// READ JSON FILE
const slideData = JSON.parse(fs.readFileSync(path.join(__dirname, 'slideData.json'), 'utf-8'));

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await TourData.create(slideData);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.error('Data Import Error:', err);
  } finally {
    process.exit();
  }
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await TourData.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.error('Data Deletion Error:', err);
  } finally {
    process.exit();
  }
};

// Handle Command Line Arguments
if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
} else {
  console.log('Please provide a valid command: --import or --delete');
  process.exit();
}

// Log command-line arguments for debugging
console.log(process.argv);

// node dev-data/import-dev-data.js --import
