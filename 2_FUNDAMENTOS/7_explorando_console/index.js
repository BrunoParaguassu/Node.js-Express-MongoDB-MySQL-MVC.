//mais de um valor

const x = 10; 
const y = 'algum texto'
const z = [1, 2]

console.log(x, y, z)

//constagem de impressao

console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

//variavel entre string
console.log('O nome é %s, ele é programador', y)

//limpar o console
setTimeout(function () {
    console.clear()
},2000)