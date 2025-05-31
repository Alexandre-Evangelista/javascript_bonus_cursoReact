const pessoa = {nome:'luiz',                             sobrenome:'miranda',
    idade:30,
    endereco:{
        rua:'av brasil',
        numero:320,
        cidade:'sao paulo',}
} 
const nome2= pessoa.nome;
console.log(nome2); // luiz
const {nome, sobrenome:sobrenomeNovo, idade, filhos="2"} = pessoa;
//pode mudar o nome da variavel e atribuir valores
console.log(nome2,sobrenomeNovo,idade,filhos);
  