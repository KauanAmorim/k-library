import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
    id:             { type: String },
    nome:           { type: String, required: true },
    nacionalidade:  { type: String }
});

const Author = mongoose.model('Author', AuthorSchema);

export default Author;