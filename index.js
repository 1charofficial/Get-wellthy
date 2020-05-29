//npm i express and handlebars
const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const app = express(); 
const wellthyFunc = require('./lib/wellthyAPI.js');

require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'

}))

app.set('view engine', 'hbs');


app.get('/', async (req, res) => {
    let data = await wellthyFunc();
    console.log(data);
    res.render('index', {data})
})

app.get('/page2', async (req, res) => {
    res.render('page2')
})

app.get('/page3', async (req, res) => {
    res.render('page3')
})


app.listen(3000, () => {
    console.log('server is running niiiiiicely!');
})