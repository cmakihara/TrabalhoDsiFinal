
'use strict';

const pg = require('pg');

const client = new pg.Client({
  host: 'localhost',
  port: 5432,
  database: 'cadpreso',
  user: 'postgres',
  password: 'sa'
});

client.connect();

module.exports = client;
