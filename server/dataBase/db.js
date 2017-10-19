
'use strict';

const pg = require('pg');

const client = new pg.Client({
  host: 'localhost',
  port: 5432,
  database: 'cadpreso',
  user: 'postgres',
  password: 'univel'
});

client.connect();

module.exports = client;
