import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: true },
  availability: { type: String, required: true },
  price: { type: Number, required: true }
});

const Book = model("Book", bookSchema);

export default Book;