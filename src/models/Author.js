import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
    id:             { type: String },
    name:           { type: String, required: true },
    nacionality:    { type: String }
});

const Author = mongoose.model('authors', AuthorSchema);

export default Author;