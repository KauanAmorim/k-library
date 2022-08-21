import mongoose from "mongoose";

const BooksSchema = new mongoose.Schema({
    id:             { type: String },
    titulo:         { type: String, required: true },
    autor:          { type: String, required: true },
    editora:        { type: String, required: true },
    numeroPaginas:  { type: Number }
})

const Books = mongoose.model('books', BooksSchema);

export default Books;