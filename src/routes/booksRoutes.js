import express from 'express';
import BooksController from '../controllers/booksController.js';

const router = express.Router();

router
    .get('/books', BooksController.listBooks)
    .get('/books/busca', BooksController.listBooksByEditora)
    .get('/books/:id', BooksController.listBookById)
    .post('/books', BooksController.createBook)
    .put('/books/:id', BooksController.updateBook)
    .delete('/books/:id', BooksController.deleteBook)

export default router;