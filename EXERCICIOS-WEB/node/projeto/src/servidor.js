const porta = 3030;

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const bd = require('./BancoDeDados')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/produtos',(req, res, next) => {
    res.send(bd.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bd.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bd.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto);  //json
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bd.salvarProduto({
        id: req.body.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto);  //json
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bd.excluirProduto(req.params.id)
    res.send(produto);  //json
})


app.listen(porta, () => {
    console.log(`TOMA VOANDO NA PORTA ${porta}.`)
})
