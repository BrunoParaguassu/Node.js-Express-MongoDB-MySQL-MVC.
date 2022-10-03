const express = require('express')
const app = express()
const port = 3000


const path = require('path')

//Ler o body
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())


const basePath = path.join(__dirname, 'templates')

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
})

app.post('/users/save', (req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const idade = req.body.age;

    console.log(`O nome é ${name} e tem a idade ${idade}`);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    //leitura da tabela users, resgatar um usuário do banco
    console.log(`Estamos buscando pelo usuário ${id}`)

    res.sendFile(`${basePath}/users.html`);

})

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`);

})

app.listen(port, () => {

    console.log(`app rodando na porta ${port}`);

});