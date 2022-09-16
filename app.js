//dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const { config } = require('dotenv');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3005

//parse middleware
app.use(bodyParser.urlencoded({ extended: false}))

//parse app/json
app.use(bodyParser.json());

//static files
app.use(express.static('public'));

//template
app.engine('hbs', exphbs.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');

//ROUTE
app.get('', (req, res) => {
    res.render('home');
});



//listening
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
