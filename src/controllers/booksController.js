import Book from "../models/Book.js";

class BooksController {

    static listBooks(req, res) {
        Book.find()
            .populate('autor')
            .exec((error, books) => {
                res.status(200).json(books);
            });
    }

    static listBookById(req, res) {
        const { id } = req.params;
        Book.findById(id)
            .populate('autor', 'nome')
            .exec((err, books) => {
                if (!err) {
                    res.status(200).send(books);
                } else {
                    res.status(404).send({ message: `${err.message} - Book not found` });
                }
            })
    }

    static listBooksByEditora(req, res) {
        const { editora } = req.query
        Book.find({ editora: editora }, {}, (err, books) => {
            if (!err) {
                res.status(200).send(books);
            } else {
                res.status(404).send(err.message);
            }
        })
    }

    static createBook(req, res) {
        const book = new Book(req.body);
        book.save(function (error) {
            if (error) {
                res.status(500).send({ error: `${error.message} - error to save book` });
            } else {
                res.status(201).send(book.toJSON());
            }
        })
    }

    static updateBook(req, res) {
        const { id } = req.params;
        Book.findByIdAndUpdate(id, { $set: req.body }, (error) => {
            if (!error) {
                res.status(200).send({ message: 'Book Updated' });
            } else {
                res.status(500).send({ message: error.message });
            }
        });
    }

    static deleteBook(req, res) {
        const { id } = req.params;
        Book.findByIdAndDelete(id, (error) => {
            if (!error) {
                res.status(200).send({ message: 'Book deleted' });
            } else {
                res.status(500).send({ message: error.message });
            }
        });
    }
}

export default BooksController