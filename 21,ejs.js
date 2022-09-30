const express = require('express');
const ejs  = require('ejs');
const fs = require('fs');
const app = express();


app.get('/', (req,res) => {
    res.send(`<h1>EJS page rendering</h1>`);
});

app.get('/data', (req, res) => {
    fs.readFile('view/21')
})