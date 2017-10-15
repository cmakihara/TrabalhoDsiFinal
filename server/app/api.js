"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const client = require('../dataBase/db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('.'));

app.post('/app/cadpreso', (req, res) => {
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const idade = req.body.idade;
    const crime = req.body.crime;
    const pena = req.body.pena;


    client.query("INSERT INTO preso(nome, sobrenome, idade, crime, pena) VALUES ($1, $2, $3, $4, $5)",
     [nome, sobrenome,  idade, crime, pena], (err, item) => {
        if(err){
            res.json(err);
            return next(err);
        } else {
          res.redirect("http://localhost:4200/");
        }


    });
});

app.get('/app/listpreso', (req, res) => {


    client.query("SELECT * FROM preso", (err, result) => {
        if (err){
            res.jason(err)
            return next(err)
        } else {
            res.status(200).json(result.rows)

        }

    })
})

app.post('/app/delpreso', (req, res) => {

    const id = req.body.id;



    client.query("DELETE FROM preso WHERE id = $1",[id], (err, result) => {
        if (err){
            res.jason(err)
            return next(err)
        } else {
            res.redirect("http://localhost:4200/");
        }

    })
})




module.exports = app;
