import Author from "../models/Author.js";

class AuthorsController {

    static listAuthors(req, res) {
        Author.find((error, Authors) => {
            res.status(200).send(Authors);
        })
    }

    static listAuthorById(req, res) {
        const { id } = req.params;
        Author.findById(id, (err, author) => {
            if (!err) {
                res.status(200).send(author);
            } else {
                res.status(404).send({ message: `${err.message} - Author not found` });
            }
        })
    }

    static createAuthor(req, res) {
        const author = new Author(req.body);
        author.save(function (error) {
            if (error) {
                res.status(500).send({ error: `${error.message} - error to save author` });
            } else {
                res.status(201).send(author.toJSON());
            }
        })
    }

    static updateAuthor(req, res) {
        const { id } = req.params;
        Author.findByIdAndUpdate(id, { $set: req.body }, (error) => {
            if (!error) {
                res.status(200).send({ message: 'Author Updated' });
            } else {
                res.status(500).send({ message: error.message });
            }
        });
    }

    static deleteAuthor(req, res) {
        const { id } = req.params;
        Author.findByIdAndDelete(id, (error) => {
            if (!error) {
                res.status(200).send({ message: 'Author deleted' });
            } else {
                res.status(500).send({ message: error.message });
            }
        });
    }
}

export default AuthorsController