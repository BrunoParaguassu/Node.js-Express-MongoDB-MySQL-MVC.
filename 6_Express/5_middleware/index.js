const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

const checkauth = function(req, res, next) {

    req.authstatus = true

    if(req.authstatus){
        console.log('Está logado, pode continuar')
        next()
    }else{
        console.log('Não está logado, faço o login para continuar')
        next()
    }
}
 
app.use(checkauth);

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`);

})

app.listen(port, () => {

    console.log(`app rodando na porta ${port}`);

});