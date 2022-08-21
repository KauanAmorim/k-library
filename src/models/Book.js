import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    id:             { type: String },
    titulo:         { type: String, required: true },
    autor:          { type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: true },
    editora:        { type: String, required: true },
    numeroPaginas:  { type: Number }
})

const Book = mongoose.model('books', BookSchema);

export default Book;