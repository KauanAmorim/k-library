import Books from "../models/Books.js";

class BooksController {

    static listBooks(req, res) {
        Books.find((error, books) => {
            res.status(200).send(books);
        })
    }
}

export default BooksController