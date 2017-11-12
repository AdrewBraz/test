'use strict';
const express = require('express');
const http = require('http');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

app.use(cors());
app.use(bodyParser.json());


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});


app.get('/employees', function(req, res) {
  res.send(data.employees);
});

app.get('/departments', function(req, res) {
  res.send(data.departments);
});

const server = http.createServer(app);

server.listen(port);

console.log('Server listening on: ', port);