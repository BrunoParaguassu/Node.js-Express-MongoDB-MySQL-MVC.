const path = require ('path');

const custompath = '/relatorios/bruno/relatorio1.pdf';

console.log(path.dirname(custompath));
console.log(path.basename(custompath));
console.log(path.extname(custompath));