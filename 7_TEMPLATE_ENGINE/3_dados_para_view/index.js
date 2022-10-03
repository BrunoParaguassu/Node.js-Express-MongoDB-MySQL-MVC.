const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

    const user = {
        name: 'Bruno',
        surname: 'Paraguassú Sousa',
        age: '35',
    }

    const user2 = {
        name: 'Anne',
        surname: 'Caroline de Souza Paraguassú',
        age: '34'
    }

    res.render('home', { user: user, user2 }); //quando a chave e valores tem nomes iguais poderia deixar com uma USER so
})

app.listen(3000, () => {
    console.log('Server rodando!')
}) 