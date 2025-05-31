//map numeros.map((valor,indice,array) => {}
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.map(function(numero) {
    return numero * 2;
})); 
    console.log(numbers.map(numero=> numero **4
));

const pessoas = [
    {nome: 'Alexandre', idade: 25},
    {nome: 'João', idade: 30},
    {nome: 'Maria', idade: 35},
    {nome: 'Pedro', idade: 40},
    {nome: 'Ana', idade: 45},
    {nome: 'Luiz', idade: 50}
];
const fazerAno= pessoas.map((pessoa) => { 
    return {nome: pessoa.nome,
        idade:pessoa.idade +1
    };
});
console.log(fazerAno);
const adicionarID= pessoas.map((pessoa,indice) => {
    return {...pessoa, id: indice + 1};
});
console.log(adicionarID);