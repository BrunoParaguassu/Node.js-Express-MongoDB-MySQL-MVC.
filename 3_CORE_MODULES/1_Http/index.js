const http = require ('http');

const port = 3000

const server = http.createServer((req, res) => {
    res.write('OI Http')
    res.end()
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})