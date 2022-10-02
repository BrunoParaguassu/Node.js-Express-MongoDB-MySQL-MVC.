//const inquirer = require ('inquirer')
import inquirer from 'inquirer'
import chalk from 'chalk'

inquirer
    .prompt([
        {name: 'nome', message: 'Qual seu Nome ?'},
        {name: 'idade', message: 'Qual sua idade ?'},
     ])
    .then((answers) => {
        if (!answers.nome || !answers.idade){
            throw new Error('O nome e a idade são obrigatorios!')
        }
        const response = `O nome do usuário é ${answers.nome} e ele tem ${answers.idade} anos!`
        
        console.log(chalk.bgYellow.black(response))
    })
    .catch((err) => console.log(err))