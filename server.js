import express from 'express';
import cors from 'cors';
import https from 'https';
import fs from 'fs';
import dotenv from 'dotenv';

// set environment variables defined in ./.env
dotenv.config();

// VARIABLES
var app = express().use(cors({ origin: "https://localhost:3000" }));
const expressPort = process.env.EXPRESS_PORT || 3000;

// ROUTE CALLBACKS

function root(req, res) {
  res.json(JSON.stringify({
    msg: 'Hello World!'
  }));
  console.log(Math.random() > 0.5 ? 'beep' : 'boop');
}

// ROUTES

app.get('/', root);

app.get('/api/names', (req, res) => res.json(
  { names: ['Jon Snow', 'Arietta LeNoire'] }
))

// START EXPRESS SERVER

// create HTTPS server from express app
const server = https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert'),
}, app);


// start server
server.listen(expressPort,
  () => console.log(`Express server running on port ${expressPort}`)
);
