//filter sempre retorna um array com a mesma quantidade de elementos ou menos
// filter recebe uma função de callback que retorna true ou false
//numeros.filter((valor,indice,array) => {}
const numeros=[5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
console.log(numeros.filter(function(numero) {
    return numero%2===0;
})); 

console.log(numeros.filter((numero) => {
    return numero > 30;
})); // [35, 40, 45, 50]






const pessoas=[
    {nome:'alexandre', idade: 25},
    {nome: 'João', idade: 25},
    {nome: 'Maria', idade: 30},
    {nome: 'Pedro', idade: 35},
    {nome: 'Ana', idade: 40},
    {nome: 'Luiz', idade: 45}
];
console.log(pessoas.filter((pessoa) => {
    return pessoa.idade > 30;
}));
console.log(pessoas.filter((pessoa) => {
    return pessoa.nome.length>=5;
}));
console.log(pessoas.filter(function(pessoa) {
    return pessoa.nome.startsWith('J');
})); 
console.log(pessoas.filter((pessoa) => {
    return pessoa.nome.endsWith('a');
}));