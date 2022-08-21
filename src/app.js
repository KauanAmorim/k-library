import express from "express";
import database from "./config/database/connection.js";
import Books from "./models/Books.js";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Rota raiz');
});

app.get('/books', (req, res) => {
    Books.find((err, books) => {
        res.status(200).send(books);
    })
});

app.get('/books/:id', (req, res) => {
    res.status(200).send('Retorna livro por id');
});

app.post('/books', (req, res) => {
    res.status(201).send('Cria livro');
});

app.put('/books/:id', (req, res) => {
    res.status(200).send('Altera livro por id');
});

app.delete('/books/:id', (req, res) => {
    res.status(200).send('Deleta livro por id');
});

export default app;