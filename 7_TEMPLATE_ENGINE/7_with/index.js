const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {

    const itens = ['item A', 'item B', 'item C']

    res.render('dashboard', {itens});
})

app.get('/post', (req, res) => {

    const post = {
        title: 'Aprender NodeJS',
        category: 'Javascript',
        body: 'Este artigo vai te ensinar a aprender Nodejs...',
        comments: 4,
    }
    res.render('blogpost', { post });
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

    const approved = false

    res.render('home', { user: user, user2, auth, approved }); //quando a chave e valores tem nomes iguais poderia deixar com uma USER so
})

app.listen(3000, () => {
    console.log('Server rodando!')
})