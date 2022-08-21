import Books from "../models/Books.js";

class BooksController {

    static listBooks(req, res) {
        Books.find((error, books) => {
            res.status(200).send(books);
        })
    }

    static createBook(req, res) {
        const book = new Books(req.body);
        book.save(function (error) {
            if (error) {
                res.status(500).send({ error: `${error.message} - error to save book` });
            } else {
                res.status(201).send(book.toJSON());
            }
        })
    }
}

export default BooksController