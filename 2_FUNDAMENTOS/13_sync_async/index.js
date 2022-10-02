const fs = require('fs'); //file system

console.log('inicio')

fs.writeFileSync('arquivo.txt', 'oi bruno');

console.log('Fim');