const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
})

app.get('/', (req, res) => {

    const user = {
        name: 'Bruno',
        surname: 'ParaguassĂș Sousa',
        age: '35',
    }

    const user2 = {
        name: 'Anne',
        surname: 'Caroline de Souza ParaguassĂș',
        age: '34'
    }

    const auth = true

    res.render('home', { user: user, user2, auth }); //quando a chave e valores tem nomes iguais poderia deixar com uma USER so
})

app.listen(3000, () => {
    console.log('Server rodando!')
})