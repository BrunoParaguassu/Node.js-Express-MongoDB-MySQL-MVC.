const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
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

app.get('/blog', (req, res) => {
    const post = [
        {
            title: 'Aprender Nodejs',
            category: 'jNodejs',
            body: 'Teste',
            comments: 4,
        },
        {
            title: 'Aprender javascript',
            category: 'javascript',
            body: 'Teste',
            comments: 4,
        },
        {
            title: 'Aprender Python',
            category: 'Python',
            body: 'Teste',
            comments: 4,
        },
        {
            title: 'Aprender PHP',
            category: 'PHP',
            body: 'Teste',
            comments: 4,
        }
    ]
    res.render('blog', { post })
})

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

    const auth = true

    const approved = false

    res.render('home', { user: user, user2, auth, approved }); //quando a chave e valores tem nomes iguais poderia deixar com uma USER so
})

app.listen(3000, () => {
    console.log('Server rodando!')
})