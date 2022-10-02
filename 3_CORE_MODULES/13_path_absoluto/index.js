const path = require ('path');

//path absoluto de um arquivo

console.log (path.resolve('teste.txt'));

//formar um caminho(path)

const midFolder = "relatorios"
const fileName = "bruno.txt"

const finalPath = path.join('/', 'arquivos', midFolder, fileName);

console.log(finalPath);