import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    id:             { type: String },
    title:          { type: String, required: true },
    author:         { type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: true },
    editor:         { type: String, required: true },
    numberPages:    { type: Number }
})

const Book = mongoose.model('books', BookSchema);

export default Book;