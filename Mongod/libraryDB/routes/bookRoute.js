import { Router } from "express";
import Book from "../models/bookModel.js";
import mongoose from "mongoose";

const route = Router();



route.post('/add_book', async (req, res) => {
  try {
    const { title, author, publishedYear, availability, price } = req.body;

    const newBook = await Book.create({
      title,
      author,
      publishedYear,
      availability,
      price
    });

    res.status(201).json(newBook);

  } catch (error) {
    res.status(400).json({
      msg: "Error creating book",
      error: error.message
    });
  }
});



route.get('/allBooks', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);

  } catch (error) {
    res.status(500).json({
      msg: "Error fetching books",
      error: error.message
    });
  }
});



route.get('/showBooks/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: "Invalid book ID format" });
    }

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ msg: "Book not found" });
    }

    res.status(200).json(book);

  } catch (error) {
    res.status(500).json({
      msg: "Error fetching book",
      error: error.message
    });
  }
});



route.patch('/updateBook/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      req.body,
      { new: true } // return updated data
    );

    if (!updatedBook) {
      return res.status(404).json({ msg: "Book not found" });
    }

    res.status(200).json(updatedBook);

  } catch (error) {
    res.status(400).json({
      msg: "Error updating book",
      error: error.message
    });
  }
});



route.delete('/deleteBook/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ msg: "Book not found" });
    }

    res.status(200).json({
      msg: "Book deleted successfully",
      deletedBook
    });

  } catch (error) {
    res.status(400).json({
      msg: "Error deleting book",
      error: error.message
    });
  }
});


export default route;