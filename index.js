console.clear();
require('dotenv-safe').config();

const path = require('path');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./public'));

app.get('*', (req, res, next) => {
    console.log('x-forwarded-proto', req.headers['x-forwarded-proto']);
    if (req.headers['x-forwarded-proto'] != 'https') {
        res.redirect("https://" + req.headers.host + req.url);
    } else {
        next();
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/home.html'));
});

const port = process.env.APP_PORT;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
