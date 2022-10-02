const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

/*readline.question('Qual a linguagem preferida ?', (languagem)=>{
    console.log(`A minha linguagem preferida é: ${languagem}`);
    readline.close();
});*/

readline.question('Qual a linguagem preferida ?', (languagem)=>{
    if (languagem === `Java`){
        console.log(`Que linguagem antiga!`);
    }else{
        console.log(`A minha linguagem preferida é: ${languagem}`);
    }
    readline.close();
});