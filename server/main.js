'use strict';
const app = require('./app/api');
const client = require('./dataBase/db');

app.listen(3000, function(){
    console.log('Servidor iniciado.');
});
