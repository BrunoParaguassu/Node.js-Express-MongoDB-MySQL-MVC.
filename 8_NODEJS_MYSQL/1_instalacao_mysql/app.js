const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '170614@Ba',
    database: 'nodejs_mysql',
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to MySQL');
    }
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
});