import express from "express";
import database from "./config/database/connection.js";

database.on("error", console.log.bind(console, "Connection error"));
database.once("open", () => {
    console.log("Database opened");
})

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Rota raiz');
});

app.get('/livros', (req, res) => {
    res.status(200).send('Retorna livros');
});

app.get('/livros/:id', (req, res) => {
    res.status(200).send('Retorna livro por id');
});

app.post('/livros', (req, res) => {
    res.status(201).send('Cria livro');
});

app.put('/livros/:id', (req, res) => {
    res.status(200).send('Altera livro por id');
});

app.delete('/livros/:id', (req, res) => {
    res.status(200).send('Deleta livro por id');
});

export default app;