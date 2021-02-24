console.clear();

const path = require('path');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/home.html'));
});

const port = 10100;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
