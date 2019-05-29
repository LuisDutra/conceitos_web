const porta = 3030;

const express = require('express');
const app = express();

app.get('/produtos',(req, res, next) => {
    res.send({nome: 'Notebook', preco: 123.45}) // converter json
});

app.listen(porta, () => {
    console.log(`TOMA VOANDO NA PORTA ${porta}.`)
})