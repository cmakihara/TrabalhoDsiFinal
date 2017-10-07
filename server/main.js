"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

function getClient() {
    return new pg.Client({
      host: 'localhost',
      port: 5432,
      database: 'cadpreso',
      user:'postgres',
      password: 'sa',
    });
}

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
    const client = getClient();
    client.connect();
    client.query("INSERT INTO preso(nome, sobrenome, idade, crime, pena) VALUES ($1, $2, $3, $4, $5)",
     [nome, sobrenome,  idade, crime, pena], (err, item) => {
        if(err){
            res.json(err);
            return next(err);
        } else {
          res.redirect("http://localhost:4200/");
        }
        client.end();
        
    });
});

app.get('/app/listpreso', (req, res) => {
    const client = getClient();
    client.connect()
    client.query("SELECT * FROM preso", (err, result) => {
        if (err){
            res.jason(err)
            return next(err)
        } else {
            res.status(200).json(result.rows)
        }
        client.end();
    })
})

app.post('/app/delpreso', (req, res) => {
    const client = getClient();
    const id = req.body.id;

    client.connect()

    client.query("DELETE FROM preso WHERE id = $1",[id], (err, result) => {
        if (err){
            res.jason(err)
            return next(err)
        } else {
            res.redirect("http://localhost:4200/");
        }
        client.end();
    })
})




app.listen(3000, function(){
    console.log('Servidor iniciado.');
});
