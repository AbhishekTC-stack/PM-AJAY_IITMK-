import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import route from "./routes/bookRoute.js";

const app = express();

dotenv.config();

app.use(express.json());

app.use('/books', route);

const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

mongoose.connect(mongoUri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});