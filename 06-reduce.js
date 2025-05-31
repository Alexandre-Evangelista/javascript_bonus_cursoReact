//reduce usado para resultar em um valor com um array
//numeros.reduce((acumulador,valor,indice,array) => {},0) zero é o valor inicial do acumulador
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0)); 

console.log(numeros.reduce((acumulador, numero) => {
    if (numero % 2 === 0) {
        console.log(acumulador);
         return acumulador+=numero;
         
    }else {
         return acumulador;
    }
},0));

const pessoas = [
    {nome: 'Alexandre', idade: 25},
    {nome: 'João', idade: 30},
    {nome: 'Maria', idade: 35},
    {nome: 'Pedro', idade: 40},
    {nome: 'Ana', idade: 45},
    {nome: 'Luiz', idade: 50}
];

console.log(pessoas.reduce((acumulador, pessoa) => {
    if(acumulador.idade > pessoa.idade) return acumulador;
    return pessoa;
    })); 