import express from 'express';
import AuthorsController from '../controllers/authorsController.js';

const router = express.Router();

router
    .get('/author', AuthorsController.listAuthors)
    .get('/author/:id', AuthorsController.listAuthorById)
    .post('/author', AuthorsController.createAuthor)
    .put('/author/:id', AuthorsController.updateAuthor)
    .delete('/author/:id', AuthorsController.deleteAuthor)

export default router;